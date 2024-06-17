import React, { useState } from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import image1 from '../../assets/prayagraj/prayagrajPackage1.jpg'
import image2 from '../../assets/prayagraj/prayagrajPackage1.jpg'
import ScrollToTop from '../ScrollToTop';

const AkbarFortPrayagrajPackage = () => {

  const [images, setImages] = useState([
    image1,
    image2,
  ])

  return (
    <>
      <ScrollToTop />
      <div className='text-start font-extrabold text-2xl my-3'>Akbar Fort, Prayagraj</div>
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
        <h1 className=' text-2xl font-bold my-2'>About Akbar Fort Prayagraj</h1>
        <p className='my-2'>
          Akbar Fort, located in Prayagraj (formerly Allahabad), is a splendid example of Mughal architecture and a significant historical landmark. Built by Emperor Akbar in 1583, this massive fort stands at the confluence of the Ganges, Yamuna, and the mythical Saraswati rivers, known as the Triveni Sangam. The fort is renowned for its robust construction, intricate design, and majestic grandeur.
        </p>
        <p className='my-2'>
          Inside the fort, visitors can explore a variety of attractions, including the Ashoka Pillar, a sandstone obelisk dating back to the 3rd century BCE, and the Saraswati Koop, believed to be the source of the Saraswati River. The Patalpuri Temple, an underground shrine, and the immortal banyan tree, Akshayavat, are other significant features within the fort's premises.
        </p>
        <p>
          Though part of the fort is occupied by the Indian Army and not accessible to the public, the remaining sections offer a fascinating glimpse into India’s rich historical and cultural heritage. Akbar Fort stands as a testament to the architectural brilliance and historical significance of the Mughal era, drawing visitors from around the world.
        </p>
      </div>
    </>
  );
};

export default AkbarFortPrayagrajPackage