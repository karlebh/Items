import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import gsap from 'gsap'

import Header from './components/Header'
import Footer from './components/Footer'
import Pages from './pages/Pages'
import Notice from './components/Notice'

window.gsap = gsap

function App() {

  return (
    // <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-lime-700">
    <div className="bg-gradient-to-r from-emerald-700 to-teal-700 max-w-[3000px] mx-auto">
      <BrowserRouter>
        <div className="min-h-screen">
          <Header />
          <Notice />
          <main className='p-3 md:p-5 lg:p-6'>
            <Pages />
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
