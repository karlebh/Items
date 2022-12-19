import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Product from '../components/Product'
import Carousel from '../components/Carousel'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  const { items, loading } = useContext(StoreContext)

  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-20">
        {loading && items.length === 0 ?
            [1,2,3,4].map((id) => <Skeleton key={id} count={3} />)
          : items.map(item => <Product key={item.id} product={item}></Product>)}
      </div>
    </div>
  )
}

export default Home