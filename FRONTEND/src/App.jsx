import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import EnterOTP from './pages/EnterOTP'
import Successfully from './pages/Successfully'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div className='bg-slate-900 min-h-screen'>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Footer /> */}
      {/* <div className='grid grid-cols-4 gap-4'>
        <Cart />
      </div> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
      {/* <EnterOTP /> */}
      {/* <Successfully /> */}
      <Checkout />
    </div>
  )
}

export default App