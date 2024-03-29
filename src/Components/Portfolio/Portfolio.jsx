import React from 'react'
import "./Portfolio.css"
import {Swiper,SwiperSlide} from 'swiper/react'
import Gym from "../../img/gym.png";
import Google from "../../img/google.png";
import dei from "../../img/dei.png"
import Hoc from "../../img/hoc.png"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode= theme.state.darkMode;
    
  return (
    <div className="portfolio" id='Portfolio'>
       
         {/*heading */}
        <span  style={{color: darkMode? 'white': ''}} >Recent Project</span>
        <span>Portfolio</span>

        {/* slider*/}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
               <img src={Gym} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={dei} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            




        </Swiper>

    </div>
  )
}

export default Portfolio
