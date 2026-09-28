export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-sm">🚀</span>
          LaunchPad
        </div>
        <p className="text-sm">© {new Date().getFullYear()} LaunchPad, Inc. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
