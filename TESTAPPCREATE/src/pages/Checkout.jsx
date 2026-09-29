import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useShop } from '../context/ShopContext.jsx'

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useShop()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    card: '',
  })
  const [placed, setPlaced] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    clearCart()
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed! 🎉</h1>
        <p className="mb-6">Thank you, {form.name}. Your order is confirmed.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white px-6 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold">Shipping Details</h1>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full border rounded px-3 py-2 text-gray-900" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full border rounded px-3 py-2 text-gray-900" />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full border rounded px-3 py-2 text-gray-900" />
        <div className="flex gap-4">
          <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="w-full border rounded px-3 py-2 text-gray-900" />
          <input name="zip" value={form.zip} onChange={handleChange} placeholder="ZIP" className="w-full border rounded px-3 py-2 text-gray-900" />
        </div>
        <input name="card" value={form.card} onChange={handleChange} placeholder="Card Number" className="w-full border rounded px-3 py-2 text-gray-900" />
        <button
          type="submit"
          disabled={cart.length === 0 && false}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Place Order
        </button>
      </form>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-fit">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between text-sm mb-2">
            <span>{item.title} x{item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <hr className="my-3" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
