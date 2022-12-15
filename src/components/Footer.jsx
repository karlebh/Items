import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'

const Footer = () => {
  const {categories} = useContext(StoreContext)

  return (
    <div className=''>
      {/* mobile footer */}

      <div className='bg-zinc-600 min-h-32 w-full 
    text-gray-200 py-5 px-10 flex flex-col sm:flex-row justify-between items-center text-left lg:hidden'>
        <div className='flex items-center self-start sm:mt-4'>
          <div>
            <h1 className='hover:text-white text-2xl font-semibold'>New Collections</h1>
            <h4 className='hover:text-white text-lg font-semibold'>Here for you!</h4>
          </div>
        </div>

        <div className="">
          <div className='my-4'>
            <ol>
            {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
            </ol>
          </div>
          <div className='my-4'>
            <ol>
               {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
            </ol>
          </div>
        </div>


        <div className="">
          <div className='my-4'>
            <ol>
               {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
            </ol>
          </div>
          <div className='my-4'>
            <ol>
               {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
            </ol>
          </div>
        </div>

      </div>


      {/* desktop footer */}
      <div className='bg-zinc-600 min-h-32 w-full 
    text-gray-200 py-5 px-10 hidden lg:flex justify-between items-center text-left'>
        <div className='flex items-center'>
          <div>
            <h1 className='hover:text-white text-2xl font-semibold'>New Collections</h1>
            <h4 className='hover:text-white text-lg font-semibold'>Here for you!</h4>
          </div>
        </div>

        <div className='my-4 sm:my-0'>
          <ol>
             {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
          </ol>
        </div>
        <div className='my-4 sm:my-0'>
          <ol>
             {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
          </ol>
        </div>
        <div className='my-4 sm:my-0'>
          <ol>
             {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
          </ol>
        </div>
        <div className='my-4 sm:my-0'>
          <ol>
             {categories.map((cat, id) => <li className='capitalize' key={id}><Link to={`/${cat}`}>{cat}</Link></li>)}
          </ol>
        </div>
      </div>

    </div>
  )
}

export default Footer