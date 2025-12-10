import { Link, useParams } from "react-router";
import { products } from "../data/products";
import type { Product } from "../types/Product";


export default function ProductDetails() {

  const { productId } = useParams<string>();

  const product: Product | undefined = products.find((item)=>item.id===Number(productId))
  if(!product) {
    return <div>Der Produkt wurde nicht gefunden</div>;
  }

  return (<article key={product.id}>

  <h3 className="text-3xl font-bold my-8">ProductDetails</h3>

    <div className="border-1 shadow-xl rounded-xl  p-5 my-5 border-gray-300">
        <h2 className="mb-3">{product.name}</h2>
        <p>
          <span>{product.price} €</span>
        </p>
    </div>
    <div>
      <Link className="hover:text-red-800" to="/products"> Zurück
      </Link>
    </div>

  </article>);
}
