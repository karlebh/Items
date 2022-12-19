import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavBar from "./NavBar"
import { StoreContext } from '../context/StoreContext'
import { CartContext } from '../context/CartContext'

const Header = () => {

  const [open, setOpen] = useState(false)
  const { NavBarOpen, setNavBarOpen, categories } = useContext(StoreContext)
  const { cart } = useContext(CartContext)
  const itemCount = cart.length
  const location = useLocation()

  let nav = document.getElementById('nav')

  function toggleMenu() {
    // setNavBarOpen(!NavBarOpen)
    if (nav.classList.contains('w-0')) nav.classList.replace('w-0', 'w-screen')
    else nav.classList.replace('w-screen', 'w-0')

    let div = nav.querySelector('div')
    if (div.classList.contains('w-0')) div.classList.replace('w-0', 'w-3/4')
    else div.classList.replace('w-3/4', 'w-0')

    setOpen((open) => !open)
  }

  return (
    <div className='p-3 md:p-5 lg:p-6 text-gray-200'>
      <header className='flex justify-between items-baseline'>
        <div>
          <Link to="/">
            <h1 className='text-4xl font-bold'>Site</h1>
          </Link>
        </div>

        <div className='hidden md:block relative'>
          <div className='inline-flex items-center'>

            <Link to="/cart" className='mr-2 font-semibold relative'>
              {itemCount ? <span className='text-lime-400 text-[.6rem] w-4 h-4 text-center rounded-full absolute -right-1 -top-2 bg-gray-900 '>{itemCount}</span> : ''}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>

            <button className='mx-2 font-semibold' onClick={() => setNavBarOpen(!NavBarOpen)}>Category</button>
            <Link to="/wishlist" className='mx-2 font-semibold'>Wishlist</Link>

            <Link className='font-semibold bg-lime-600 pl-1 pr-3 py-1 rounded-md ml-2 hover:border-red-600' to="addProduct">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline w-7 h-7 mb-1 font-bold">
                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
              </svg>
              <span className="text-gray-50">
                Add product
              </span>
            </Link>
          </div>
          <div className='pb-10 pt-3'>
            {NavBarOpen && <NavBar />}
          </div>
        </div>


        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className='inset-0 w-0 h-full fixed z-30 bg-opacity-50 bg-gray-600 transition-all duration-500 ease' id='nav'>
        <div className='flex flex-col bg-gray-300 text-gray-800 h-full w-0 overflow-hidden transition-all duration-700 ease'>
          <button className='self-end p-4' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link
            onClick={toggleMenu}
            className={`mt-20 font-semibold capitalize
           px-3 py-2 ${location.pathname.replace('%20', ' ').replace('/', '') === 'cart' ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : ''}`} to="cart">
            <div className="relative w-12">
              Cart
              {itemCount ? <span className='text-lime-400 text-[.6rem] w-4 h-4 text-center rounded-full absolute -right-1 -top-1 bg-gray-900 '>{itemCount}</span> : ''}
            </div>
          </Link>
          {categories.map((cat, id) => (
            <Link
              key={id}
              className={`font-semibold capitalize  px-3 py-2 ${location.pathname.replace('%20', ' ').replace('/', '') === cat ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : ''}`}
              to={`/${cat}`}
              onClick={toggleMenu}
            >{cat}</Link>))}
          <Link onClick={toggleMenu} className={`font-semibold capitalize  px-3 py-2
             ${location.pathname.replace('%20', ' ').replace('/', '') === 'wishlist' ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : ''}`} to="wishlist">Wishlist</Link>
          <Link onClick={toggleMenu} className={`font-semibold capitalize  px-3 py-2
             ${location.pathname.replace('%20', ' ').replace('/', '') === 'addProduct' ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : ''}`} to="addProduct">Add product</Link>
          <Link to="/pagination" className='mx-2 font-semibold' onClick={toggleMenu}>Pagination</Link>
        </div>

      </nav>
    </div>



  )
}

export default Header