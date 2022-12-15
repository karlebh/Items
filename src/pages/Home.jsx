import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Product from '../components/Product'
import Carousel from '../components/Carousel'

const Home = () => {
  const { items } = useContext(StoreContext)

  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-20">
        {items.map(item => <Product key={item.id} product={item}></Product>)}
      </div>
    </div>
  )
}

export default Home