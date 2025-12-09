import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function ProductList() {
  return (
    <>
      <h2 className="my-8">ProductList</h2>
      <ul>
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </ul>
    </>
  );
}
