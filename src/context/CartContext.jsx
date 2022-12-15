import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = (props) => {

  let localCart = localStorage.cart ? JSON.parse(localStorage.cart) : []

  const [cart, setCart] = useState(localCart)
  const [notice, setNotice] = useState(true)

  const add = (product, qty) => {
    if (!product) return

    Object.assign(product, {qty})
    let item = cart.find(it => it.id === product.id)

    if (item) {
      item.qty++
      setCart(cart)
    } else {
      setCart([...cart, product])
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const qtyPlus = (product) => {
    if (!product) return

    let item = cart.find(it => it.id === product.id)
    if (item.qty > 24) return
    item.qty += 1
    setCart([...cart])
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const qtyMinus = (product) => {
    if (!product) return

    let item = cart.find(it => it.id === product.id)

    if (item.qty < 2) return

    item.qty -= 1

    setCart([...cart])
    localStorage.setItem('cart', JSON.stringify(cart))
  }

    const remove = product => {
    if (!product) return
    let itemId = cart.find(item => item.id === product.id)
    if (itemId) {
      let newCart = cart.filter(item => item.id !== product.id)
      setCart([...newCart])
    }
  }

  const clearCart = () => {
    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))
  }



  return <CartContext.Provider
    value={{
      add,
      cart,
      notice,
      setNotice,
      qtyPlus,
      qtyMinus,
      remove,
      clearCart
    }}
  >
    {props.children}
  </CartContext.Provider>
}

export default CartContextProvider