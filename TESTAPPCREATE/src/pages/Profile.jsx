import { useState } from 'react'
import { useShop } from '../context/ShopContext.jsx'

export default function Profile() {
  const { user, setUser, wishlist } = useShop()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(user)

  const handleSave = () => {
    setUser(form)
    setEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {editing ? (
          <div className="space-y-3">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border rounded px-3 py-2 text-gray-900" />
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border rounded px-3 py-2 text-gray-900" />
            <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full border rounded px-3 py-2 text-gray-900" />
            <button onClick={handleSave} className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        ) : (
          <div className="space-y-2">
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Total Orders:</strong> {user.orders}</p>
            <p><strong>Wishlist Items:</strong> {wishlist.length}</p>
            <button onClick={() => setEditing(true)} className="bg-indigo-600 text-white px-4 py-2 rounded mt-2">
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((o) => (
            <div key={o} className="flex justify-between border-b pb-2">
              <span>Order #{1000 + o}</span>
              <span className="text-green-600">Delivered</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
