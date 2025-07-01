import { PRODUCTS_CONST } from "@/constants/app-constants";
import { APP_ROUTES } from "@/constants/app-route";
import { Products } from "@/services/products-service";
import Link from "next/link";

export default function ProductsList({ products }: { products: Products[] }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{PRODUCTS_CONST.PRODUCTS}</h1>
      <ul className="space-y-2 w-1/2 ml-0 mr-auto">
        {products.map((product) => (
          <li key={product.id} className="p-4 border rounded shadow">
            <Link href={`${APP_ROUTES.PRODUCTS}${product.id}`}>
              <p className="font-semibold">{product.name}</p>
            </Link>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
