import React, { useContext } from 'react'
import { A11y, Autoplay, Navigation } from 'swiper';
import { StoreContext } from '../context/StoreContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';

export default () => {

  const { items } = useContext(StoreContext)

  return (
    <>
      <div className='hidden md:flex lg:-mt-10 justify-center'>
        <Swiper
          modules={[A11y, Autoplay, Navigation]}
          slidesPerView={2}
          spaceBetween={20}
          navigation
          autoplay={true}
          scrollbar={{ draggable: true }}
          effect="fade"
          height={300}
          className='flex justify-center'
        >
          {items.slice(0, 7).map(item => <SwiperSlide key={item.id}>
            <Link to={`product/${item.id}`}>
              <img src={item.image} alt="" className='rounded-md' style={{
                height: '550px',
                width: '100vw',
                // objectFit: 'cover',
                objectPosition: 'center',
                backgroundSize: '100%'
              }} />
            </Link>
          </SwiperSlide>)}

        </Swiper>
      </div>

      <div className='md:hidden lg:-mt-10'>
        <Swiper
          modules={[A11y, Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          autoplay={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          effect="fade"
          height={300}
        >
          {items.slice(0, 7).map(item => <SwiperSlide key={item.id}>
            <Link to={`product/${item.id}`}>
              <img src={item.image} alt="" className='rounded-md w-[300px] h-[300px]' />
            </Link>
          </SwiperSlide>)}

        </Swiper>
      </div>

    </>
  );
};  