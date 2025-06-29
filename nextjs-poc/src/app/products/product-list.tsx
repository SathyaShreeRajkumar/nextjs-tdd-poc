import { PRODUCTS_CONST } from "@/constants/app-constants";
import { Products } from "@/types/products";

export default function ProductsList({products}: { products: Products[] }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{PRODUCTS_CONST.PRODUCTS}</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded shadow">
            <p className="font-semibold">{product.name}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}