import { getProducts } from "@/services/products-service";
import ProductsList from "./product-list";

export default async function ProductsPage() {
   const products = await getProducts();

  return (
    <ProductsList products={products} />
  );
}
