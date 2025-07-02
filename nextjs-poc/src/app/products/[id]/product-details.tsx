"use client";

import { PRODUCTS_CONST } from "@/constants/app-constants";
import { FAVOURITE_BUTTON_TEST_ID } from "@/constants/data-testid/context";
import { useProductContext } from "@/context/product-context";
import { Products } from "@/services/products-service";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type ProductDetailsProps = {
  product: Products | undefined;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useProductContext();

  const isFavorite = favorites.some(
    (fav: { id: string }) => fav.id === product?.id
  );

  const toggleFavorite = () => {
    product &&
      (isFavorite ? removeFromFavorites(product.id) : addToFavorites(product));
  };

  return (
    <div className="m-6">
      <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
      <p className="text-lg mb-1">
        {PRODUCTS_CONST.MODELS} {product?.model}
      </p>
      <p className="mb-4 text-gray-700">{product?.description}</p>

      <p className="text-lg font-semibold mb-2">
        {PRODUCTS_CONST.PRICE} {product?.price}
      </p>

      <div className="m-4">
        <h2 className="text-xl font-semibold mb-2">
          {PRODUCTS_CONST.SPECIFICATIONS}
        </h2>
        <ul className="list-disc list-inside">
          {product?.specs &&
            Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
        </ul>
        <button
          onClick={toggleFavorite}
          className="flex items-center gap-2 text-red-600 hover:scale-105 transition pt-2"
          data-testid={`${FAVOURITE_BUTTON_TEST_ID}-${product?.id}`}
        >
          {isFavorite ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
          {isFavorite ? PRODUCTS_CONST.REMOVE_FROM_FAVORITES : PRODUCTS_CONST.ADD_TO_FAVORITES}
        </button>
      </div>
    </div>
  );
}
