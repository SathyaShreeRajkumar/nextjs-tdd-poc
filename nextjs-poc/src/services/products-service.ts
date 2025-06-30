import { API_URLS } from "@/constants/api-urls";
import { PRODUCTS_ERROR } from "@/constants/service-constants";

export type Products = {
  id: string;
  name: string;
  price: string;
};

export async function getProducts(): Promise<Products[]> {
  const response = await fetch(API_URLS.PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(PRODUCTS_ERROR);
  }

  return response.json();
}
