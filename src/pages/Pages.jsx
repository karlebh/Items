import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import Category from '../components/Category'
import Cart from '../components/Cart'
import ProductDetails from '../components/ProductDetails'
import Pagination from '../components/Pagination'
import Home from './Home'
import Wishlist from '../components/Wishlist'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ScrollToTop from '../helpers/scrollToTop'

const Pages = () => {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
      >
        
        <Routes location={location}>
    
          <Route path='/' element={<Home />} />
          <Route path='/addProduct' element={<AddProduct />} />
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/:category' element={<Category />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Pages