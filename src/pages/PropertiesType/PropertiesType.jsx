import React from 'react';
import '../../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner1(2).png'
import banner3 from '../../assets/banner1(3).png'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const PropertiesType = () => {
    return (
        
        <div className='mt-36'>
            
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide>
                    <img className='size-16 border-4 rounded-lg' src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='size-16 borde rounded-lg' src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='size-16 borde rounded-lg' src={banner3} alt="" />
                </SwiperSlide>
                <br /> <br />
      </Swiper>
            
        </div>
    );
};

export default PropertiesType;