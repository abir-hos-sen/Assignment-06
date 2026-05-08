import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CartPage from './pages/CartPage.jsx'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      toast.info(`${product.name} is already in cart!`)
      return
    }
    setCart([...cart, { ...product, quantity: 1 }])
    toast.success(`${product.name} added to cart!`)
  }

  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id)
    setCart(cart.filter((item) => item.id !== id))
    toast.error(`${product.name} removed from cart.`)
  }

  const checkout = () => {
    if (cart.length === 0) {
      toast.warn('Your cart is empty!')
      return
    }
    setCart([])
    toast.success('Checkout successful! All items cleared.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home 
                cart={cart} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                checkout={checkout} 
              />
              <Footer />
            </>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              removeFromCart={removeFromCart} 
              checkout={checkout} 
            />
          } 
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default App