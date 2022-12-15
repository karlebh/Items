import React, { useState } from 'react'
import Product from './Product'

const Pagination = () => {
  const [products, setProducts] = useState(JSON.parse(localStorage.products))
  const [first, setFirst] = useState(0)
  const [last, setLast] = useState(4)
  let perPage = 4, range = 5, start = 1
  let totalPages = products.length / perPage
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
    // console.log({ first, last, currPage, totalPages, allProducts: products.length })
  }

  function next() {
    if (currPage === totalPages) return

    setFirst(first + perPage), setLast(last + perPage)
    currPage = currPage + 1
    setPage(currPage)
    pageLinks()
    // console.log({ first, last, currPage, totalPages, allProducts: products.length })
  }
  return (
    <div>
      {currPage >= 2 ? <button className='text-4xl font-semibold' onClick={() => prev()}>Prev</button> : ''}
      {currPage === totalPages ? '' : <button className='ml-10 text-4xl font-semibold' onClick={() => next()}>Next</button>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mt-20">
        {/* {products.slice(first, last).map((item, id) => <Product key={id} product={item}></Product>)} */}
        {products.slice(0,14).slice(first, last).map((item, id) => <Product key={id} product={item}></Product>)}
      </div>
      <br />
      <br />
      {currPage >= 2 ? <button className='text-4xl font-semibold' onClick={() => prev()}>Prev</button> : ''}
      {currPage === totalPages ? '' : <button className='ml-10 text-4xl font-semibold' onClick={() => next()}>Next</button>}

    </div>
  )
}

export default Pagination