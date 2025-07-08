"use client";

import { PRODUCTS_CONST } from "@/constants/app-constants";
import { APP_ROUTES } from "@/constants/app-route";
import { SEARCH_INPUT_TEST_ID } from "@/constants/data-testid/product";
import { Products } from "@/services/products-service";
import Link from "next/link";
import { useState } from "react";

export default function ProductsList({ products }: { products: Products[] }) {
  const [searchProduct, setSearchProduct] = useState<String>(String);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder={PRODUCTS_CONST.SEARCH_PRODUCTS}
          className="border p-2 rounded w-1/2"
          data-testid={SEARCH_INPUT_TEST_ID}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">{PRODUCTS_CONST.PRODUCTS}</h1>
      <ul className="space-y-2 w-1/2 ml-0 mr-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="p-4 border rounded shadow">
              <Link href={`${APP_ROUTES.PRODUCTS}/${product.id}`}>
                <p className="font-semibold">{product.name}</p>
              </Link>
              <p>{product.price}</p>
            </li>
          ))
        ) : (
          <p>{PRODUCTS_CONST.NO_PRODUCTS_FOUND}</p>
        )}
      </ul>
    </div>
  );
}
