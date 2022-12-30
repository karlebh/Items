import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'

const Cart = () => {
  const { cart, qtyPlus, qtyMinus, remove } = useContext(CartContext)
  const [modal, setModal] = useState(true)
  let subTotal = 0
  cart.forEach(item => {
    subTotal += (item.price * item.qty)
  })
  const payDiv = document.getElementById('modal')


  return (
    <>
      <div className='w-full flex flex-col text-gray-200'>
        <div className={`p-4 w-full ${modal ? 'lg:w-8/12' : 'lg:w-full'}`}>
          <div className='flex justify-between items-baseline mb-2'>
            <h1 className='lg:text-3xl font-medium italic'>Your Shopping Cart</h1>
            <button onClick={() => setModal(true)} className="hidden lg:selection:inline-flex item-center font-semibold">
              <img src="https://cdn.iconscout.com/icon/free/png-256/checkout-1553147-1314013.png" alt="" className='w-5 h-5 mr-2' />
              Checkout
            </button>
            <button onClick={() => document.getElementById('checkout').scrollIntoView({ behavior: 'smooth', block: 'end' })} className="inline-flex lg:hidden item-center font-semibold">
              <img src="https://cdn.iconscout.com/icon/free/png-256/checkout-1553147-1314013.png" alt="" className='w-5 h-5 mr-2' />
              Checkout
            </button>
          </div>
          <div>
            {cart.length ?
              cart.map((item, id) => (
                <div
                  className='mt-10 grid gap-y-4 grid-cols-2 lg:grid-cols-6 items-center justify-items-center my-4 py-3 bg-stone-800 px-2 relative rounded-md  overflow-hidden'
                  key={id}>
                   <div className='grid w-full col-span-2 lg:col-span-1 justify-items-center'>
                    <img src={item.image} className='w-full h-56 md:h-72' alt="" />
                  </div>
                  {/* <div className='grid w-full col-span-2 lg:col-span-1 justify-items-center'>
                    <img src={item.image} className='hidden lg:block w-full h-40 md:w-20 md:h-20 md:rounded-full object-contain' alt="" />
                  </div> */}

                  <div className='col-span-2 self-items-left w-full grid'>
                    <p className='flex items-start justify-start' >{item.title}</p>
                    <p className='text-sm font-semibold mt-3'>{item.category}</p>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='px-4'>{item.qty}</div>
                    <div className='inline-flex flex-col items-between'>
                      <button className='bg-gray-600 rounded-full p-1 text-center mb-2 text-gray-50 font-semibold' onClick={() => qtyPlus(item)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </button>

                      <button className='bg-gray-600 rounded-full p-1 text-center mt-2 text-gray-50 font-semibold' onClick={() => qtyMinus(item)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                      </button>

                    </div>
                  </div>

                  <div>
                    ${item.price}
                  </div>

                  <button onClick={() => remove(item)} className='hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button onClick={() => remove(item)} className='absolute right-0 bg-slate-500 top-0 p-1 lg:hidden rounded-l-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                </div>)) :
              <div className='w-8/12 text-gray-200 italic text-7xl text-center mt-10'>
                <h1>Cart is empty</h1>
              </div>
            }
          </div>

          <div className='flex flex-col sm:flex-row justify-between items-center mt-28'>
            <div>
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-3 text-gray-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                back to store
              </Link>
            </div>

            <br className='sm:hidden' />

            <div><span className='mr-4 capitalize'><span className='font-semibold text-2xl'>Total:</span> </span><span className='font-bold text-2xl text-gray-100'>${subTotal.toFixed(2)}</span></div>
          </div>
        </div>
        
        {/* Checkout for mobile */}
        <div id='checkout' className='bg-stone-800 shadow-xl text-gray-100 p-4 lg:hidden rounded-md'>
          <div className="mt-32">
            <h1 className='text-3xl mb-5'>Checkout</h1>
            <Checkout total={subTotal} />
          </div>
        </div>


        {modal &&
          (<div className='w-4/12 bg-stone-800 fixed right-0 top-0 h-screen shadow-xl text-gray-100 p-4 hidden lg:block transition-all duration-750 ease-out' id='modal'>
            <button className='float-right' onClick={() => {
              // payDiv.classList.add('out')
              console.log(payDiv)
              setTimeout(() => {
                setModal(false)
              }, 300)
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mt-32">
              <h1 className='text-3xl mb-5'>Checkout</h1>
              <Checkout total={subTotal} />
            </div>

          </div>)}
      </div>

    </>
  )
}

export default Cart