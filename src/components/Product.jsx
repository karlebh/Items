import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import StarRating from './StarRating'
import { CartContext } from '../context/CartContext'
import { WishlistContext } from '../context/WishlistContext'
import { StoreContext } from '../context/StoreContext'

const Products = ({ product }) => {

  const { add } = useContext(CartContext)
  const { toggleLike, wishlistIds } = useContext(WishlistContext)
  const { categories } = useContext(StoreContext)
  const { pathname } = useLocation()

  let alert = document.getElementById('alert')
  let changeCSS = (pathname === '/wishlist' || categories.includes(pathname.replace('%20', ' ').replace('/', ''))) ? 'md:flex-row' : 'xl:flex-row'

  return (
    <div className=''>
      {
        <div className={`relative flex flex-col ${changeCSS} 
        md:items-center justify-evenly text-gray-300`}>
          <Link to={`/product/${product.id}`}>
            <div className='flex justify-center'>
              <img src={product.image} className="object-fit my-2 rounded-md w-[24rem] lg:w-[20rem] h-[15rem] sm:h-[20rem] " alt="" />
            </div>
          </Link>

          <div className='rounded-sm my-4 py-2 px-2 flex flex-col items-center text-center'>
            <p className={`font-semibold truncate ... w-[10rem] md:w-[13rem]
             ${pathname === '/wishlist' ? 'lg:w-[40rem]' : 'lg:w-[20rem]'}`} title={product.title}>{product.title} </p>
            <span className='font-semibold text-md'>${product.price}</span>
            <div>
              <div className='flex items-center gap-x-4'>
                <StarRating rate={product.rating.rate} />
                <p className='text-md font-semibold tracking-wide text-gray-300'>{product.rating.count} reviews</p>
              </div>

              <div className='font-medium'><span className='text-xl'>{product.rating.rate}</span>/5</div>
            </div>

            <div className='flex items-center gap-x-4 mt-3'>
              <button className='px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-500 rounded-md font-semibold' onClick={() => {
                add(product, 1);
                alert.classList.replace('hidden', 'inline-flex')
                gsap.from('#alert', { y: 30 })
                setTimeout(() => {
                  alert.classList.replace('inline-flex', 'hidden')
                }, 1000)
              }} >Add to cart</button>

              <div className="inline">


                {wishlistIds.includes(product.id)
                  ? <button className='px-4 py-2' onClick={() => {
                    toggleLike(product)
                    alert.classList.replace('inline-flex', 'hidden')
                    gsap.from('#alert', { y: 30 })
                  }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </button>
                  : <button className='px-4 py-2' onClick={() => {
                    toggleLike(product)
                    alert.classList.replace('hidden', 'inline-flex')
                    gsap.from('#alert', { y: 30 })
                    setTimeout(() =>
                      alert.classList.replace('inline-flex', 'hidden')
                      , 1000)
                  }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                }

              </div>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default Products