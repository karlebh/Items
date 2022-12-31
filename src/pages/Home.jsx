import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Carousel from '../components/Carousel'
import Pagination from '../components/Pagination'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {TextBlock} from 'react-placeholder/lib/placeholders';

const awesomePlaceholder = (
  <div className='my-awesome-placeholder'>
    <TextBlock rows={7} className='' color='rgb(229 231 235)' style={{width: '100%', height: 80}}/>
    <TextBlock rows={7} className='mt-20' color='rgb(229 231 235)' style={{width: '100%', height: 80}}/>
    <TextBlock rows={7} className='mt-20' color='rgb(229 231 235)' style={{width: '100%', height: 80}}/>
  </div>
);
const Home = () => {
  const { loading } = useContext(StoreContext)

  return (

    <div id='main'>
      <ReactPlaceholder showLoadingAnimation  type='media' rows={7} ready={!loading} customPlaceholder={awesomePlaceholder}>
        <Carousel />
        <Pagination />
      </ReactPlaceholder>
    </div>
  )
}

export default Home