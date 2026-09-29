import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const PAGE_SIZE = 8
const categories = ['All', 'Mobiles', 'Laptops', 'Audio', 'Wearables', 'Fashion', 'Home Appliances', 'Books', 'Sports']

export default function ProductListing() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const categoryParam = searchParams.get('category') || 'All'

  const [category, setCategory] = useState(categoryParam)
  const [sort, setSort] = useState('default')
  const [page, setPage] = useState(1)

  let filtered = products

  if (category !== 'All') {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (query) {
    filtered = filtered.filter((p) => p.title.includes(query))
  }

  if (sort === 'price-low') {
    filtered = filtered.sort((a, b) => a.price - b.price)
  } else if (sort === 'price-high') {
    filtered = filtered.sort((a, b) => a.price - b.price)
  } else if (sort === 'rating') {
    filtered = filtered.sort((a, b) => b.rating - a.rating)
  }

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const pageItems = filtered.slice(start, start + PAGE_SIZE)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">
          {category === 'All' ? 'All Products' : category}
          {query && ` — "${query}"`}
        </h1>
        <div className="flex gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2 text-gray-900"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded px-3 py-2 text-gray-900"
          >
            <option value="default">Sort: Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">{filtered.length} products found</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pageItems.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded ${page === i + 1 ? 'bg-indigo-600 text-white' : ''}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  )
}
