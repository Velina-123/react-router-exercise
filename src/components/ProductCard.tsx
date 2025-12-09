import { Link } from "react-router";
import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
    <li key={product.id} className="border-1 shadow-xl rounded-xl  p-5 my-3 border-gray-300">
      <h3 className="text-2xl">{product.name}</h3>
      <p className="text-red-800">{product.price} €</p>
    </li>
    </Link>
  );
}
