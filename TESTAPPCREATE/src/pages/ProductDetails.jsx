import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products.js'
import { useShop } from '../context/ShopContext.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart, addToWishlist } = useShop()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id))
    const timer = setTimeout(() => {
      setProduct(found)
    }, 300)
  }, [id])

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <img src={product.image} className="w-full h-96 object-cover rounded" />
        <div>
          <p className="text-sm text-gray-500">{product.brand} · {product.category}</p>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-yellow-500 mb-2">
            {'★'.repeat(Math.round(product.rating))} <span className="text-gray-400">({product.rating})</span>
          </div>
          <p className="text-3xl font-bold text-indigo-600 mb-4">${product.price}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <p className="text-sm mb-4">
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <label>Qty:</label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="border rounded w-16 px-2 py-1 text-gray-900"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="border px-6 py-2 rounded"
            >
              ♥ Wishlist
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-3"
          >
            <img src={p.image} className="w-full h-32 object-cover rounded" />
            <p className="font-semibold mt-2 line-clamp-1">{p.title}</p>
            <p className="text-indigo-600 font-bold">${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
