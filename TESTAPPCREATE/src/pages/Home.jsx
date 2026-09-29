import { Link } from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const categories = ['Mobiles', 'Laptops', 'Audio', 'Wearables', 'Fashion', 'Home Appliances', 'Books', 'Sports']

export default function Home() {
  const featured = products.slice(0, 8)
  const deals = products.filter((p) => p.price < 100)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-10 mb-8">
        <h1 className="text-4xl font-bold mb-2">Big Savings on Everything</h1>
        <p className="mb-4">Discover 40+ products across 8 categories.</p>
        <Link to="/products" className="bg-white text-indigo-700 px-5 py-2 rounded font-semibold">
          Shop Now
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/products?category=${cat}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center font-semibold hover:shadow-lg"
          >
            {cat}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Deals Under $100</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
