
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Notice = () => {
  const { notice, setNotice } = useContext(CartContext)
  let alert = document.getElementById('alert')
  return (
    <>
      {notice &&
        <div className='bg-lime-500 px-3 py-2 rounded-md fixed right-1/3 bottom-10 hidden z-30' id='alert'>
          <p className='text-xl text-gray-100 font-medium'>Success!</p>
          <button className='cursor-pointer' onClick={() => alert.classList.replace('inline-flex', 'hidden')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-100 ml-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      }
    </>
  )
}

export default Notice