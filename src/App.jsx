import React, { useContext } from "react"
import { BrowserRouter } from "react-router-dom"
import gsap from "gsap"
import StoreContextProvider, { StoreContext } from "./context/StoreContext"
import CartContextProvider from "./context/CartContext"
import WishlistContextProvider from "./context/WishlistContext"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Pages from "./pages/Pages"
import Notice from "./components/Notice"
// import ScrollToTop from "./helpers/ScrollToTop"

//added this for deployment

window.gsap = gsap

function App() {
  return (
    <div className="bg-gradient-to-r from-emerald-700 to-gray-600">
      <BrowserRouter>
        <StoreContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <div className="min-h-screen max-w-7xl mx-auto">
                {/* <ScrollToTop /> */}
                <Header />
                <Notice />
                <main className="p-3 md:p-5 lg:p-6">
                  <Pages />
                </main>
              </div>
              <Footer />
            </WishlistContextProvider>
          </CartContextProvider>
        </StoreContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
