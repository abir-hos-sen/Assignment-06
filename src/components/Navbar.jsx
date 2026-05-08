import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold text-violet-600 tracking-tight">
          Digi<span className="text-gray-900">Tools</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-violet-600 transition-colors">Products</Link>
          <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <Link to="/cart" className="relative cursor-pointer mr-2">
            <ShoppingCart className="w-5 h-5 text-gray-500 hover:text-violet-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-violet-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <a href="#" className="text-sm text-gray-500 hover:text-violet-600 font-medium hidden sm:block">
            Login
          </a>
          <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar