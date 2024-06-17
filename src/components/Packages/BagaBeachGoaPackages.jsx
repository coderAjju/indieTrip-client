import React, { useState } from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import image1 from '../../assets/Goa/goaPackage1.jpg'
import image2 from '../../assets/Goa/goaPackage2.jpg'
import image3 from '../../assets/Goa/goaPackage3.jpg'
import image4 from '../../assets/Goa/goaPackage4.jpg'
import ScrollToTop from '../ScrollToTop';

const BagaBeachGoaPackages = () => {

  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
  ])

  return (
    <>
    <ScrollToTop/>
      <div className='text-start font-extrabold text-2xl my-3'>Baga Beach, Goa</div>
      <section className='w-full'>
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={30} // Adjust the spacing as needed
          slidesPerView={1} // Show only one slide by default
          autoplay
          className=' w-full lg:h-[500px] md:h-[500px] h-[200px]'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`slide-${index + 1}`}
                  className='w-full object-cover
                   lg:h-[500px] h-full mx-auto select-none'
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className=' mt-5'>
        <h1 className=' text-2xl font-bold my-2'>About Baga Beach Goa</h1>
        <p>
        Nestled in the northern part of Goa, Baga Beach stands as one of India's most popular coastal destinations. Famous for its lively atmosphere, it offers an exciting blend of sun, sand, and sea. By day, visitors can relax on the golden sands, indulge in thrilling water sports like parasailing and jet-skiing, or enjoy a leisurely boat ride to spot dolphins. As the sun sets, Baga transforms into a vibrant nightlife hub, with beach shacks and clubs offering a dynamic mix of music, food, and dance. The bustling Tito’s Lane, lined with trendy bars and eateries, ensures that the party never stops. Ideal for both adventure seekers and those looking to unwind, Baga Beach provides an unforgettable Goan experience.
        </p>
      </div>
    </>
  );
};

export default BagaBeachGoaPackages;