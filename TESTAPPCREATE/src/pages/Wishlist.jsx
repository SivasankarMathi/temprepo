import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useShop()

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Wishlist ({wishlist.length})</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
          <Link to="/products" className="text-indigo-600 underline">Browse Products</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <img src={item.image} className="w-24 h-24 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <p className="text-indigo-600 font-bold">${item.price}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-indigo-600 text-white px-4 py-1 rounded text-sm"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
