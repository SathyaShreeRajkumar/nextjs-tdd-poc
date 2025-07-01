import { PRODUCTS_CONST } from "@/constants/app-constants";
import { Products } from "@/services/products-service";

type ProductDetailsProps = {
  product: Products | undefined;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
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
      </div>
    </div>
  );
}
