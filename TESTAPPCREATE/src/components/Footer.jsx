export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-bold mb-2">ShopVerse</h3>
          <p className="text-sm">Your one-stop online shopping destination.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Categories</h4>
          <ul className="text-sm space-y-1">
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Audio</li>
            <li>Fashion</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Support</h4>
          <ul className="text-sm space-y-1">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <p className="text-sm">Twitter · Instagram · Facebook</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-gray-700">
        © 2024 ShopVerse. All rights reserved.
      </div>
    </footer>
  )
}
