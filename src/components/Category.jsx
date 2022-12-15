import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { StoreContext } from '../context/StoreContext'
import Product from './Product'

const Category = () => {
  const { category } = useParams()
  const { sortByCategory } = useContext(StoreContext)
  return (
    <div>
      {sortByCategory(category).map(item => <Product key={item.id} product={item}></Product>)}
    </div>
  )
}

export default Category