import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../context/CartContext'
import { StoreContext } from '../context/StoreContext'
import { WishlistContext } from '../context/WishlistContext'
import StarRating from './StarRating'

const ProductDetails = () => {

  const { id } = useParams()
  const { items, findItem } = useContext(StoreContext)

  const { add } = useContext(CartContext)
  const { wishlistIds, toggleLike } = useContext(WishlistContext)
  const [qty, setQty] = useState(Number(1))
  let [product, setProduct] = useState(findItem(Number(id)))
  let alert = document.getElementById('alert')

  const incrementQty = (value) => {
    if (value) {
      if (value > 24) value = 25
      else if (value < 2) value = 1
      setQty(value)
      return
    }

    setQty(qty + 1)
    if (qty > 24) setQty(25)
  }

  const decrementQty = () => {
    setQty(qty - 1)
    if (qty < 2) setQty(1)
  }


  return (
    <div className='w-10/12 mx-auto'>
      <div className='grid md:grid-cols-2 p-4 gap-x-5'>
        <div>
          <img src={product.image} className='h-96 w-full object-fill object-center rounded-md' alt="" />
        </div>

        <div className='p-4 flex flex-col justify-between items-stretch'>
          <p className='font-medium text-2xl' title={product.title}>{product.title} </p>
          <div className='inline-flex items-center'>
            <StarRating rate={product.rating.rate} />
            <span className="mx-3 text-xl">·</span>
            <p className='text-xs font-semibold'>({product.rating.count} votes)</p>
          </div>

          <div>
            <p className='text-xs font-semibold'>Current Price:</p>
            <p className='font-medium text-2xl'>${product.price}</p>
          </div>

          <div className='py-3'>
            <button onClick={() => decrementQty()} className="px-2 py-1 bg-gray-300 text-gray-800 mr-2 rounded">-</button>
            <input type="number" max="25"
              className='border-lime-400 border-b-2 outline-none w-[40%]
             sm:w-[20%] text-center px-2 py-1 bg-gray-100 focus:hover:bg-gray-200 
              placeholder:text-sm placeholder:lowercase' value={qty} onChange={(e) => incrementQty(Number(e.target.value))} />
            <button onClick={() => incrementQty()} className="px-2 py-1 bg-gray-300 text-gray-800 ml-2 rounded">+</button>
          </div>



          <div>

            <p>{((product.rating.rate * 100) / 5).toFixed(2)}% of buyers enjoyed this product! ({product.rating.count} votes)</p>
          </div>


          <div className='flex items-center gap-x-4 mt-3'>
            <button className='px-4 py-2 bg-gray-400 rounded-md' onClick={() => {
              add(product, 1);
              alert.classList.replace('hidden', 'inline-flex')
              gsap.from('#alert', { y: 30 })
              setTimeout(() =>
                alert.classList.replace('inline-flex', 'hidden')
                , 1000)
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
      <div className='mt-3'>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductDetails