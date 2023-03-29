import React, { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import NavBar from "./NavBar"
import { StoreContext } from "../context/StoreContext"
import { CartContext } from "../context/CartContext"
import MobileNav from "./MobileNav"
import useDebounce from "../helpers/useDebounce"
import { useEffect } from "react"

const Search = () => {
  const { items } = useContext(StoreContext)
  const [search, setSearch] = useState("")
  const [results, setResult] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const debouncedSearch = useDebounce(search, 500)

  function clear() {
    setIsOpen(false)
    setResult([])
    setSearch("")
  }

  useEffect(() => {
    searchProduct()
  }, [debouncedSearch])

  function searchProduct() {
    if (!search || search.length < 3) return

    let ans = items.filter(item => {
      let regex = new RegExp(search, "i")
      return item.title.match(regex)
    })

    setResult(ans)
  }

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-6 lg:mr-4 mt-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <button
            className="fixed w-full h-full z-10 inset-0 cursor-default transparent"
            onClick={clear}
          ></button>
          <div className="absolute -right-10 lg:-right-28 top-12 z-20 w-64 sm:w-80 rotateX">
            <div className="">
              <input
                className="bg-gray-800 text-white w-full border-2 outline-none rounded-md px-2 py-3"
                placeholder="Search for products"
                onChange={e => setSearch(e.target.value)}
                value={search}
              ></input>
              {search.length > 2 && (
                <button onClick={clear} className="absolute top-3.5 right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {!!results.length && (
              <div className="rounded-md bg-gray-800 w-64 sm:w-80 max-h-96 overflow-y-scroll mt-1 shadow-md">
                {results?.map((result, id) => (
                  <Link to={`/product/${result.id}`} key={result.title}>
                    <div className="p-3 hover:bg-gray-600 transition-all duration-500">
                      {result.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

const Header = () => {
  const { NavBarOpen, setNavBarOpen } = useContext(StoreContext)
  const { cart } = useContext(CartContext)
  const itemCount = cart.length
  const { pathname } = useLocation()

  const nav = document.getElementById("nav")

  function toggleMenu() {
    if (nav.classList.contains("out")) {
      nav.classList.replace("hidden", "block")
      nav.classList.remove("out")
      nav.classList.add("in")
      return
    }
    nav.classList.remove("in")
    nav.classList.add("out")
    setTimeout(() => {
      nav.classList.replace("block", "hidden")
    }, 200)
  }

  return (
    <div className="p-3 md:p-5 lg:p-6 text-gray-200" id="header">
      <header className="flex justify-between items-baseline">
        <div>
          <Link to="/">
            <h1 className="text-4xl font-bold">Site</h1>
          </Link>
        </div>

        <div className="hidden md:block relative">
          <div className="inline-flex items-center">
            <Search />

            <Link to="/cart" className="mr-2 font-semibold relative">
              {itemCount ? (
                <span className="text-lime-400 text-[.6rem] w-4 h-4 text-center rounded-full absolute -right-1 -top-2 bg-gray-900 ">
                  {itemCount}
                </span>
              ) : (
                ""
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>

            <button
              className={`mx-2 font-semibold ${
                NavBarOpen ? "font-bold text-md" : ""
              }`}
              onClick={() => setNavBarOpen(!NavBarOpen)}
            >
              Category
            </button>
            <Link
              to="/wishlist"
              className={`mx-2 font-semibold ${
                pathname === "/wishlist" ? "font-bold text-md underline" : ""
              }`}
            >
              Wishlist
            </Link>

            <Link
              className="font-semibold bg-lime-600 pl-1 pr-3 py-1 rounded-md ml-2 hover:border-red-600"
              to="addProduct"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline w-7 h-7 mb-1 font-bold"
              >
                <path d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
              </svg>
              <span className="text-gray-50">Add product</span>
            </Link>
          </div>
          <div className="pb-10 pt-3">{NavBarOpen && <NavBar />}</div>
        </div>

        <div className="md:hidden inline-flex items-baseline">
          <Search />

          <Link to="/cart" className="mr-6 font-semibold relative">
            {itemCount ? (
              <span className="text-lime-400 text-[.6rem] w-4 h-4 text-center rounded-full absolute -right-1 -top-2 bg-gray-900 ">
                {itemCount}
              </span>
            ) : (
              ""
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>

          <button onClick={toggleMenu} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav toggleMenu={toggleMenu} />
    </div>
  )
}

export default Header
