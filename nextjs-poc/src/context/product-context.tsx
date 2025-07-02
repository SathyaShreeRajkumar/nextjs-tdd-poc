"use client";

import { COMMON_CONST } from "@/constants/app-constants";
import { Products } from "@/services/products-service";
import React, { useContext } from "react";
import { createContext } from "react";

export type ProductContextType = {
  favorites: Products[];
  addToFavorites: (product: Products) => void;
  removeFromFavorites: (id: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = React.useState<Products[]>([]);

  const addToFavorites = (product: Products) => {
    setFavorites((prev) => [...prev, product]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
if (!context) {
    throw new Error(COMMON_CONST.CONTEXT_ERROR);
}
  return context;
};
