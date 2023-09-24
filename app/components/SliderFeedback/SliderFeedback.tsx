'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import Pagination from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const SliderFeedback = () => {
    return ( 
        <Swiper
        modules={[ Pagination ]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        breakpoints={{
            1200: {
                slidesPerView: 2
            }
        }}
      >
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
        <SwiperSlide>
            <FeedbackCard />
        </SwiperSlide>
      </Swiper>
    );
}
 
export default SliderFeedback;