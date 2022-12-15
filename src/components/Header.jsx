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

  function toggleMenu() {
    // setNavBarOpen(!NavBarOpen)
    let nav = document.getElementById('nav')
    if (nav.classList.contains('h-[0px]')) nav.classList.replace('h-[0px]', 'h-[280px]')
    else nav.classList.replace('h-[280px]', 'h-[0px]')

    setOpen((open) => !open)
  }


  return (
    <div className='p-3 md:p-5 lg:p-6'>
      <header className='flex justify-between items-baseline'>
        <div>
          <Link to="/">
            <h1 className='text-4xl font-bold'>Site</h1>
          </Link>
        </div>

        <div className='hidden md:block relative'>
          <div className='inline-flex items-center'>
            {/* <Link to="/pagination" className='mx-2 font-semibold'>Pagination</Link> */}
            <Link to="/cart" className='mr-2 font-semibold relative'>
              {itemCount ? <span className='text-lime-400 text-[.6rem] w-4 h-4 text-center rounded-full absolute -right-1 -top-2 bg-gray-900 '>{itemCount}</span> : ''}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </Link>

            <button className='mx-2 font-semibold'>Category</button>
            <Link to="/wishlist" className='mx-2 font-semibold'>Wishlist</Link>

            <Link className='font-semibold bg-lime-600 pl-1 pr-3 py-1 rounded-md text-gray-100 ml-2 hover:border-red-600' to="addProduct">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline w-7 h-7 mb-1 font-bold">
                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
              </svg>
              Add product
            </Link>
          </div>
          <div className='pb-10 pt-3'>
            {NavBarOpen && <NavBar />}
          </div>
        </div>


        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {
                !open
                  ? (<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />)
                  : (<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />)
              }
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className='md:hidden mt-4 bg-gray-200 rounded-md h-[0px] overflow-hidden transition-all duration-500' id='nav'>
        <div className='flex flex-col bg-gray-100 rounded-md overflow-hidden'>
          <Link
            className={`font-semibold capitalize
          hover:bggray-200 px-3 py-2 ${location.pathname.replace('%20', ' ').replace('/', '') === 'cart' ? 'bg-lime-500' : ''}`} to="cart">
            <div className="relative w-12">
              Cart
              {itemCount ? <span className='text-lime-400 text-[.6rem] w-4 h-4 text-center rounded-full absolute -right-1 -top-1 bg-gray-900 '>{itemCount}</span> : ''}
            </div>
          </Link>
          {categories.map((cat, id) => (
            <Link
              key={id}
              className={`font-semibold capitalize hover:bggray-200 px-3 py-2 ${location.pathname.replace('%20', ' ').replace('/', '') === cat ? 'bg-lime-500' : ''}`}
              to={`/${cat}`}
              onClick={() => { setNavBarOpen(false) }}
            >{cat}</Link>))}
          <Link className={`font-semibold capitalize hover:bggray-200 px-3 py-2
             ${location.pathname.replace('%20', ' ').replace('/', '') === 'wishlist' ? 'bg-lime-500' : ''}`} to="wishlist">Wishlist</Link>
          <Link className={`font-semibold capitalize hover:bggray-200 px-3 py-2
             ${location.pathname.replace('%20', ' ').replace('/', '') === 'addProduct' ? 'bg-lime-500' : ''}`} to="addProduct">Add product</Link>
        </div>
      </nav>
    </div>



  )
}

export default Header