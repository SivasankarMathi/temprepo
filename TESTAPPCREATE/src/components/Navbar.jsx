import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useShop } from '../context/ShopContext.jsx'

export default function Navbar() {
  const { cartCount, wishlist, darkMode, toggleDarkMode } = useShop()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/products?q=${search}`)
  }

  return (
    <nav className="bg-indigo-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="text-2xl font-bold whitespace-nowrap">
          ShopVerse
        </Link>

        <form onSubmit={handleSearch} className="flex-grow">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded text-gray-900"
          />
        </form>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/products" className="hover:underline">Shop</Link>
          <Link to="/wishlist" className="hover:underline">
            Wishlist ({wishlist.length})
          </Link>
          <Link to="/cart" className="hover:underline relative">
            Cart
            <span className="ml-1 bg-yellow-400 text-gray-900 rounded-full px-2">
              {cartCount}
            </span>
          </Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
          <button
            onClick={toggleDarkMode}
            className="border border-white rounded px-2 py-1"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}
