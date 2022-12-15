import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import StoreContextProvider from './context/StoreContext'
import CartContextProvider from './context/CartContext'
import WishlistContextProvider from './context/WishlistContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <App />
        </WishlistContextProvider>
      </CartContextProvider>
    </StoreContextProvider>
  </React.StrictMode>
)
