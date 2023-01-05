import React, { useContext } from "react"
import { useLocation } from "react-router"
import { StoreContext } from "../context/StoreContext"
import { Link } from "react-router-dom"

const MobileNav = ({toggleMenu}) => {
  const { categories } = useContext(StoreContext)
  const { pathname } = useLocation()

  return (
    <nav className="inset-0 w-full h-full fixed z-10 hidden out" id="nav">
      <div className="flex flex-col bg-gray-300 text-gray-800 h-full w-full overflow-auto pb-20">
        <button className="self-end p-4" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8 text-gray-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {categories.map((cat, id) => (
          <Link
            key={id}
            className={`font-semibold capitalize  px-3 py-2 border-b ${
              pathname.replace("%20", " ").replace("/", "") === cat
                ? "bg-gradient-to-r from-emerald-400 to-teal-400"
                : ""
            }`}
            to={`/${cat}`}
            onClick={toggleMenu}
          >
            {cat}
          </Link>
        ))}
        <Link
          onClick={toggleMenu}
          className={`font-semibold capitalize border-b px-3 py-2
         ${
           pathname.replace("%20", " ").replace("/", "") === "wishlist"
             ? "bg-gradient-to-r from-emerald-400 to-teal-400"
             : ""
         }`}
          to="wishlist"
        >
          Wishlist
        </Link>
        <Link
          onClick={toggleMenu}
          className={`font-semibold capitalize border-b px-3 py-2
         ${
           pathname.replace("%20", " ").replace("/", "") === "addProduct"
             ? "bg-gradient-to-r from-emerald-400 to-teal-400"
             : ""
         }`}
          to="addProduct"
        >
          Add product
        </Link>
      </div>
    </nav>
  )
}

export default MobileNav
