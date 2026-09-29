import { useState } from 'react'
import products from '../data/products.js'

export default function Admin() {
  const [items, setItems] = useState(products)
  const [newProduct, setNewProduct] = useState({ title: '', price: '', category: 'Mobiles' })

  const totalValue = items.reduce((sum, p) => sum + p.price * p.stock, 0)
  const lowStock = items.filter((p) => p.stock < 15)

  const handleAdd = () => {
    const product = {
      id: items.length + 1,
      title: newProduct.title,
      price: Number(newProduct.price),
      category: newProduct.category,
      rating: 0,
      stock: 0,
      brand: 'Unknown',
      image: 'https://picsum.photos/seed/new/400/400',
      description: '',
    }
    items.push(product)
    setItems(items)
  }

  const handleDelete = (id) => {
    setItems(items.filter((p) => p.id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Total Products</p>
          <p className="text-3xl font-bold">{items.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Inventory Value</p>
          <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Low Stock</p>
          <p className="text-3xl font-bold text-red-500">{lowStock.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <p className="text-gray-500 text-sm">Categories</p>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <div className="flex flex-wrap gap-3">
          <input
            placeholder="Title"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
            className="border rounded px-3 py-2 text-gray-900"
          />
          <input
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border rounded px-3 py-2 text-gray-900"
          />
          <button onClick={handleAdd} className="bg-indigo-600 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">Product Inventory</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="py-2">{p.id}</td>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td className={p.stock < 15 ? 'text-red-500' : ''}>{p.stock}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)} className="text-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
