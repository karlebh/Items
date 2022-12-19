
import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [items, setItem] = useState([])
  const [categories, setCategories] = useState([])
  const [NavBarOpen, setNavBarOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const products = localStorage.getItem('products')

    if (products) {
      let parsedProducts = JSON.parse(products)
      setItem(parsedProducts)
      parsedProducts.forEach(product => {
        if (! categories.includes(product.category)) categories.push(product.category)
      })

      setCategories(categories)
      
    } else {
      setLoading(true)
      await axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          let data = res.data
          localStorage.setItem('products', JSON.stringify(data))
          setItem(data)
          setLoading(false)
          data.forEach(product => {
            if (! categories.includes(product.category)) categories.push(product.category)
          })
          setCategories(categories)
          
        }).catch(err => console.log(err.message))
    }
  }

  const sortByCategory = (category) => {
    if (! category || ! category.length) return

    let newItems = []

    items.forEach(item => {
      if (item.category === category) newItems.push(item)
    })

    return newItems
  }

  const addItem = newItem => {
    Object.assign(newItem, { id: items.length + 1 })
    setItem([...items, newItem])
    localStorage.setItem('product', JSON.stringify(items))
  }

  // const removeItem = id => {
  //   if (!id) return
  //   let itemId = items.find(item => item.id === id)
  //   if (itemId) {
  //     let newItems = items.filter(item => item.id !== id)
  //     setItem([...newItems])
  //   }
  // }

  const findItem = id => {
    if (!id) return
    
    let currProduct = localStorage.currProduct ? JSON.parse(localStorage.currProduct) : ""

    if (currProduct === "") {
      let item = items.find(curItem => curItem.id === id)
      localStorage.setItem('currProduct', JSON.stringify(item))
      return JSON.parse(localStorage.currProduct)
    }

    if (currProduct && currProduct.id === id) return currProduct
    
    if (currProduct && currProduct.id !== id) {
      let item = items.find(curItem => curItem.id === id)
      localStorage.setItem('currProduct', JSON.stringify(item))
      return JSON.parse(localStorage.currProduct)
    }
  }

  // const editItem = (newDetails, id) => {
  //   if (!id) return

  //   let itemIndex = items.findIndex(item => item.id === id)
  //   let item = items.find(item => item.id === id)

  //   items.splice(itemIndex, 1) //delete item from array 

  //   Object.assign(items, {
  //     name: newDetails.name ? newDetails.name : item.name,
  //     categories: newDetails.categories ? newDetails.categories : item.categories,
  //     qty: newDetails.qty ? newDetails.qty : item.qty,
  //   })
  // }

  // const clearItems = () => {
  //   setItem([])
  // }

  return <StoreContext.Provider
    value={{
      items,
      categories,
      NavBarOpen,
      addItem,
      findItem,
      setNavBarOpen,
      sortByCategory,
      loading
    }}
  >
    {props.children}
  </StoreContext.Provider>
}

export default StoreContextProvider