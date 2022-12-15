import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import Product from './Product'

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext)
  return (
    <div>
      {wishlist.length ? wishlist.map(item => <Product key={item.id} product={item}></Product>) : <div className='italic text-center text-7xl text-gray-100'>
        Nothing Here...
      </div>}
    </div>
  )
}

export default Wishlist