import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import gsap from 'gsap'

import Header from './components/Header'
import Footer from './components/Footer'
import Pages from './pages/Pages'
import Notice from './components/Notice'
import ScrollToTop from './helpers/scrollToTop'

window.gsap = gsap

function App() {

  return (
    <div className="bg-gradient-to-r from-emerald-700 to-teal-700 max-w-8xl mx-auto">
      <BrowserRouter>
      <ScrollToTop/>
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
