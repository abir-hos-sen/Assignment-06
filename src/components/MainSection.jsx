import { Link } from 'react-router-dom'
import products from '../data/products.json'
import ProductCard from './ProductCard.jsx'

const MainSection = ({ cart, addToCart }) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Premium Digital Tools</h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            Choose from our curated collection of premium digital products designed <br className="hidden md:block" />
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons - Designer Style */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            className="px-8 py-2.5 rounded-full text-[14px] font-bold border bg-violet-600 text-white border-violet-600 shadow-md"
          >
            Products
          </button>
          <Link
            to="/cart"
            className="px-8 py-2.5 rounded-full text-[14px] font-bold border bg-white text-gray-600 border-gray-200 hover:border-violet-400 transition-all flex items-center gap-1"
          >
            Cart {cart.length > 0 && <span className="text-violet-600">({cart.length})</span>}
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={!!cart.find((item) => item.id === product.id)}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainSection