import React from "react"
import { BrowserRouter, Link } from "react-router-dom"
import gsap from "gsap"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Pages from "./pages/Pages"
import Notice from "./components/Notice"
import ScrollToTop from "./helpers/scrollToTop"

window.gsap = gsap

function App() {
  return (
    <div className="bg-gradient-to-r from-emerald-700 to-gray-600">
      <BrowserRouter>
        <div className="min-h-screen max-w-7xl mx-auto">
          <ScrollToTop />

          <Header />
          <Notice />
          <main className="p-3 md:p-5 lg:p-6">
            <Pages />
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
