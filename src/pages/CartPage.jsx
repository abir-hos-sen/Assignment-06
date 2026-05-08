import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import CartItem from '../components/CartItem'

const CartPage = ({ cart, removeFromCart, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <section className="bg-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-[42px] font-black text-[#0b1221] mb-4">Premium Digital Tools</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <Link
            to="/"
            className="px-10 py-2.5 rounded-full text-[14px] font-bold border border-gray-100 text-gray-500 hover:bg-gray-50 transition-all"
          >
            Products
          </Link>
          <button
            className="px-10 py-2.5 rounded-full text-[14px] font-bold bg-[#7c3aed] text-white shadow-lg"
          >
            Cart ({totalItems})
          </button>
        </div>

        {/* Cart Container */}
        <div className="max-w-[1200px] mx-auto bg-white border border-[#e5e7eb] rounded-3xl overflow-hidden shadow-sm min-h-[486px] flex flex-col justify-center">
          <div className="p-8">
            {cart.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div className="mb-8">
                  <ShoppingCart size={80} className="text-gray-300" strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-8">Your cart is empty</h3>
                <Link 
                  to="/" 
                  className="bg-[#7c3aed] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6d28d9] transition-all shadow-md text-base"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">Your Cart</h3>
                <div className="space-y-0">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                  ))}
                </div>

                {/* Total Section */}
                <div className="flex justify-between items-center py-8 mt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-lg font-medium">Total:</span>
                  <span className="text-[28px] font-black text-gray-900">${total}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={checkout}
                  className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-black py-5 rounded-full transition-all shadow-lg mt-6 text-lg uppercase tracking-wider"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
