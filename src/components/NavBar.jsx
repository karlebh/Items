import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const NavBar = () => {
  const [active, setActive] = useState(false)
  const location = useLocation()
  const { categories, setNavBarOpen, sortByCategory } = useContext(StoreContext)

  return (
    <>
      <button className="fixed w-full h-full z-10 inset-0 cursor-default transparent" onClick={() => setNavBarOpen(false)}></button>
      <div className='inline-flex flex-col absolute bg-gray-100 left-0 z-20 rounded-md overflow-hidden'>

        {categories.map((cat, id) => (
          <Link
            key={id}
            className={`font-semibold capitalize hover:bg-red-200 px-3 py-2 
            ${location.pathname.replace('%20', ' ').replace('/', '') === cat ? 'bg-lime-500' : ''}`}
            to={`/${cat}`}
            onClick={() => {setNavBarOpen(false); setActive(true)}}
          >{cat}</Link>))}
      </div>
    </>
  )
}

export default NavBar