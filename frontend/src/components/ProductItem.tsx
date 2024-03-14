import { Link } from 'react-router-dom'
import { Product } from '../types/Product'
import Rating from './Rating'

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="border border-yellow-300 rounded">
      <Link
        to={`/products/${product.slug}`}
        className="flex flex-col items-center sm:max-w-[250px] w-100%"
      >
        <img
          src={product.image}
          alt={product.name}
          className="sm:max-w-[250px]  w-100% "
        />
      </Link>

      <Link to={`/products/${product.slug}`}>
        <div>{product.name}</div>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div>{product.price}</div>
        {product.countInStock == 0 ? (
          <button
            disabled={product.countInStock == 0}
            className="border rounded-xl font-bold py-3 w-full"
          >
            Out of stock
          </button>
        ) : (
          <div className=" px-3 py-2">
            <button className="bg-slate-400 border rounded-xl font-bold px-5 py-3 w-full text-white">
              Add to cart
            </button>
          </div>
        )}
      </Link>
    </div>
  )
}

export default ProductItem
