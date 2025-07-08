import { getProductById } from "@/services/products-service";
import ProductDetails from "./product-details";

type ProductPageProps = {
  params: { id: string };
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { id } = params;

  const product = await getProductById(id);

  return <>{product && <ProductDetails product={product} />}</>;
}
