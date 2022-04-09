import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/latest.png'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <Swiper className="container portafolio__container"
         // install Swiper modules
          modules={[ Navigation ]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{ clickable: true }}
      >
        <SwiperSlide className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG1} alt="Proyecto X" />
          </div>
          <h3>Project Link</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/EOOA10/Proyecto-Final/tree/main/BultosWaleska" className="btn" target="_blank">GitHub Repository</a>
            <a href="https://www.youtube.com/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG1} alt="Proyecto X" />
          </div>
          <h3>Project Link</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/EOOA10/Proyecto-Final/tree/main/BultosWaleska" className="btn" target="_blank">GitHub Repository</a>
            <a href="https://www.youtube.com/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG1} alt="Proyecto X" />
          </div>
          <h3>Project Link</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/EOOA10/Proyecto-Final/tree/main/BultosWaleska" className="btn" target="_blank">GitHub Repository</a>
            <a href="https://www.youtube.com/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={IMG1} alt="Proyecto X" />
          </div>
          <h3>Project Link</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/EOOA10/Proyecto-Final/tree/main/BultosWaleska" className="btn" target="_blank">GitHub Repository</a>
            <a href="https://www.youtube.com/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portafolio