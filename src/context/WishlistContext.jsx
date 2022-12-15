import React, { createContext, useState } from 'react'

export const WishlistContext = createContext()

const WishlistContextProvider = (props) => {
  const localWishlist = localStorage.wishlist ? JSON.parse(localStorage.wishlist) : []
  const [wishlist, setWishlist] = useState(localWishlist)

  let wishlistIds = []

  wishlist.forEach(item => {
    wishlistIds.push(item.id)
  })

  const toggleLike = (product) => {

    if (! wishlist.length) {
      wishlist.push(product)
      setWishlist([...wishlist])
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      return
    }

    if (!wishlistIds.includes(product.id)) {
      wishlist.push(product)
      setWishlist([...wishlist])
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      return
    }

    if (wishlistIds.includes(product.id)) {
      // let others = wishlist.filter(item => item.id !== product.id)
      // setWishlist(others)
      let index = wishlist.findIndex(item => item.id === product.id)
      wishlist.splice(index, 1)
      setWishlist([...wishlist])
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
  }

  return <WishlistContext.Provider value={{
    toggleLike,
    wishlist,
    wishlistIds
  }}>
    {props.children}
  </WishlistContext.Provider>
}

export default WishlistContextProvider