import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const { addItem, categories } = useContext(StoreContext)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(1)
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [rate, setRate] = useState(1)
  const [count, setCount] = useState(1)
  const [desc, setDesc] = useState('')
  const navigate = useNavigate()

  let alert = document.getElementById('alert')

  const AddProduct = () => {
    if (
      name === ''
      || price === 0
      || category === ''
      || rate === 0
      || count === 0
    ) return

    addItem({ category, title: name, price, description: desc, image: '', rating: { rate, count } })
    navigate('/')
    alert.classList.replace('hidden', 'inline-flex')
    gsap.from('#alert', {x: -200})
    setTimeout(() =>
      alert.classList.replace('inline-flex', 'hidden')
      , 2000)
  }
  const clear = () => {
    setName('')
    setCategory('')
    setPrice(1)
    setRate(1)
    setCount(1)
    setDesc('')
  }

  return (
    <div className='grid place-items-center'>
      <div className='py-3 flex flex-col w-[80%] md:w-[50%] '>
        <label className='font-medium mb-2 text-gray-200 block'>Title</label>
        <input className='border-lime-400 border-b-2 outline-none
            px-4 py-2 bg-gray-100 
           focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase'
            value={name} onChange={(e) => setName(e.target.value)} placeholder='Product name e.g Nike Trouser' />
      </div>

      <div className='py-3 flex flex-col w-[80%] md:w-[50%]'>
        <label className='font-medium mb-2 text-gray-200 block' htmlFor="">Price</label>
        <input type="number" className='border-lime-400 border-b-2 outline-none
            px-4 py-2 bg-gray-100
           focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase' value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder='Price' />
      </div>

      <div className='py-3 flex flex-col w-[80%] md:w-[50%]'>
        <label className='font-medium mb-2 text-gray-200 block' htmlFor="">Category</label>
        <select name="" id="" value={category} onChange={(e) => setCategory(e.target.value)}
          className='border-lime-400 border-b-2 outline-none
          px-4 py-2 bg-gray-100
         focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase'>
          {categories.map((cat, id) => <option key={id} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div className='py-3 flex flex-col w-[80%] md:w-[50%]'>
        <label className='font-medium mb-2 text-gray-200 block' htmlFor="">Description</label>
        <textarea name="" id="" cols="30" rows="10"
          placeholder='Write a brief descriptionabout the product'
          className='border-lime-400 border-b-2 outline-none
            px-4 py-2 bg-gray-100
           focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase'
          value={desc} onChange={(e) => setDesc(e.target.value)}
        >
        </textarea>
      </div>


      <div className='py-3 flex flex-col w-[80%] md:w-[50%]'>
        <label className='font-medium mb-2 text-gray-200 block' htmlFor="">Image</label>
        <input type="text" className='border-lime-400 border-b-2 outline-none
            px-4 py-2 bg-gray-100
           focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase cursor-not-allowed' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter image url here' disabled />
      </div>

      <div className='py-3 flex flex-col w-[80%] md:w-[50%]'>
        <label className='font-medium mb-2 text-gray-200 block' htmlFor="">Rating</label>
        <input type="number" max="5"
          className='border-lime-400 border-b-2 outline-none
              px-4 py-2 bg-gray-100
             focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase'
          value={rate} onChange={(e) => setRate(Number(e.target.value))} />
      </div>
      <div className='py-3 flex flex-col w-[80%] md:w-[50%]'>
        <label className='font-medium mb-2 text-gray-200 block' htmlFor="">Number of Raters</label>
        <input type="number" max="25" className='border-lime-400 border-b-2 outline-none
            px-4 py-2 bg-gray-100
           focus:hover:bg-gray-200  placeholder:text-sm placeholder:lowercase' value={count} onChange={(e) => setCount(Number(e.target.value))} />
      </div>

      <div className='flex justify-between
          w-[80%] md:w-[50%] my-7
            placeholder:text-sm placeholder:lowercase'>
        <div>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded" onClick={() => AddProduct()}>Add Product</button>
        </div>

        <div>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded" onClick={clear}>clear</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct