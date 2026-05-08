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

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="w-full flex items-center justify-between py-6 px-2 hover:bg-gray-50/50 transition-all rounded-lg group">
      <div className="flex items-center gap-6">
        {/* Icon */}
        <div className="w-[52px] h-[52px] bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm">
          <img 
            src={iconMap[item.icon]} 
            alt={item.name}
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* Info */}
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-[#0b1221] text-[16px] leading-none">{item.name}</h4>
          <p className="text-gray-400 text-[14px] font-medium leading-none">${item.price}</p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-[#ff4d8d] hover:text-[#e03a7a] font-bold text-[14px] transition-colors"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem