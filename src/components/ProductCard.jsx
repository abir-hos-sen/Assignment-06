import React from 'react'
import writing from "../assets/products/writing.png"
import designTool from "../assets/products/design-tool.png"
import portfolio from "../assets/products/portfolio.png"
import socialMedia from "../assets/products/social-media.png"
import operation from "../assets/products/operation.png"
import camera from "../assets/products/camera_8775444 1.png"
import packageIcon from "../assets/package.png"
import shoppingCart from "../assets/shopping-cart.png"

const iconMap = {
  'writing.png': writing,
  'design-tool.png': designTool,
  'portfolio.png': portfolio,
  'social-media.png': socialMedia,
  'operation.png': operation,
  'camera_8775444 1.png': camera,
  'package.png': packageIcon,
  'shopping-cart.png': shoppingCart,
}

const tagStyles = {
  popular: 'bg-violet-100 text-violet-700',
  new: 'bg-blue-100 text-blue-700',
  bestseller: 'bg-yellow-100 text-yellow-700',
}

const ProductCard = ({ product, inCart, onAddToCart }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-md transition-shadow">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-3">
        <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center">
          <img 
            src={iconMap[product.icon]} 
            alt={product.name}
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}>
          {product.tag}
        </span>
      </div>

      {/* Name & Desc */}
      <h3 className="font-bold text-gray-900 text-base mb-1">{product.name}</h3>
      <p className="text-gray-400 text-xs mb-3 flex-1">{product.description}</p>

      {/* Price */}
      <div className="mb-3">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-xs text-gray-400 ml-1">/{product.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-1 mb-4">
        {product.features.map((f, i) => (
          <li key={i} className="text-xs text-gray-500 flex items-center gap-1">
            <span className="text-violet-600 font-bold">✓</span> {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => onAddToCart(product)}
        disabled={inCart}
        className={`w-full py-3 rounded-xl font-bold transition-all shadow-md ${
          inCart 
            ? 'bg-green-500 text-white cursor-not-allowed opacity-90' 
            : 'bg-violet-600 text-white hover:bg-violet-700 active:scale-95'
        }`}
      >
        {inCart ? 'Added to Cart ✓' : 'Buy Now'}
      </button>
    </div>
  )
}

export default ProductCard