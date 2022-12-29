import React, { useState } from 'react'
import Product from './Product'

const Pagination = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.products))
  const [first, setFirst] = useState(0)
  const [last, setLast] = useState(8)
  let perPage = 8, range = 5, start = 1
  let totalPages = Math.ceil(products.length / perPage)
  let [currPage, setPage] = useState(1)
  let [links, setLinks] = useState([])

  function pageLinks() {
    links = []
    // Don't use negative values, force start at 1
    if (currPage < (range / 2) + 1) {
      start = 1;

      // Don't go beyond the last page 
    } else if (currPage >= (totalPages - (range / 2))) {
      start = Math.ceil(totalPages - range + 1);

    } else {
      start = (currPage - Math.ceil(range / 2));
    }

    for (let i = start; i <= ((start + range) - 1); i++) {
      if (i === currPage) links.push(`[${i}]`)
      else links.push(i.toString())
    }
    // console.log(links)
  }
  function prev() {
    if (currPage === start) return
    if (first < 1) setFirst(0)

    setFirst(first - perPage), setLast(last - perPage)
    currPage = currPage - 1
    setPage(currPage)
    pageLinks()
  }

  function next() {
    if (currPage === totalPages) return

    setFirst(first + perPage), setLast(last + perPage)
    currPage = currPage + 1
    setPage(currPage)
    pageLinks()
  }
  return (
    <div className='in'>
      <div className="text-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-x-8 mt-20">
        {/* {loading && items.length === 0 ?
          [1, 2, 3, 4].map((id) => <Skeleton key={id} height="20px" count={3} />)
          : items.map(item => <Product key={item.id} product={item}></Product>)} */}
        {products.slice(first, last).map((item, id) => <Product key={id} product={item}></Product>)}
      </div>

      <br />
      <br />
      <div className="flex justify-between items-center">

        {currPage >= 2 ? <a href="#main" id="header"><button className='text-gray-50  transition duration-300 text-4xl font-semibold' onClick={() => prev()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button></a> : <button></button>}
        {currPage === totalPages ? <button></button> : <a href="#main" id="header"><button className='text-gray-50  transition duration-300 ml-10 text-4xl font-semibold' onClick={() => next()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button></a>}
      </div>


    </div>
  )
}

export default Pagination