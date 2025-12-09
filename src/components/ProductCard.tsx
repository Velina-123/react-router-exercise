import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="border-2  p-2">
      <h3>{product.name}</h3>
      <p>{product.price} €</p>
    </li>
  );
}
