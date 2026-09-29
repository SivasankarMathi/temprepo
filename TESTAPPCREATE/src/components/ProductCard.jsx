import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="w-full h-48 object-cover rounded"
        />
      </Link>
      <Link to={`/product/${product.id}`} className="mt-2 font-semibold hover:text-indigo-600 line-clamp-1">
        {product.title}
      </Link>
      <p className="text-xs text-gray-500">{product.brand} · {product.category}</p>
      <div className="flex items-center gap-1 text-sm text-yellow-500">
        {'★'.repeat(Math.round(product.rating))}
        <span className="text-gray-400">({product.rating})</span>
      </div>
      <p className="text-lg font-bold mt-1">${product.price}</p>
      <div className="mt-auto flex gap-2 pt-2">
        <button
          onClick={() => addToCart(product)}
          className="flex-grow bg-indigo-600 text-white text-sm py-1.5 rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="border border-gray-300 rounded px-2 text-sm"
          title="Add to Wishlist"
        >
          ♥
        </button>
      </div>
    </div>
  )
}
