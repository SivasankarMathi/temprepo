import { useState } from 'react'
import { useShop } from '../context/ShopContext.jsx'

export default function Account() {
  const { user, setUser } = useShop()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(user)

  const handleSave = () => {
    setUser(form)
    setEditing(false)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Account Details</h2>
          {!editing && (
            <button onClick={() => setEditing(true)} className="bg-indigo-600 text-white px-4 py-2 rounded">
              Edit
            </button>
          )}
        </div>

        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded px-3 py-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact Number</label>
              <input
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="w-full border rounded px-3 py-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full border rounded px-3 py-2 text-gray-900"
                rows={3}
              />
            </div>
            <div className="flex gap-3">
              <button onClick={handleSave} className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => setEditing(false)} className="border px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact Number</p>
              <p className="font-medium">{user.contact}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{user.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
