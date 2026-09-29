import { Link, useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop()
  const navigate = useNavigate()

  const shipping = cart.length > 0 ? 9.99 : 0
  const tax = cartTotal * 0.08
  const grandTotal = cartTotal + shipping + tax

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link to="/products" className="text-indigo-600 underline">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <img src={item.image} className="w-24 h-24 object-cover rounded" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="text-indigo-600 font-bold">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="border rounded px-2"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border rounded px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
