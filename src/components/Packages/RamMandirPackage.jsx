import React, { useState } from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import image1 from '../../assets/ayodhya/ayodhyaPackage1.jpg'
import image2 from '../../assets/ayodhya/ayodhyaPackage2.jpg'
import image3 from '../../assets/ayodhya/ayodhyaPackage3.jpg'
import image4 from '../../assets/ayodhya/ayodhyaPackage4.jpg'
import image5 from '../../assets/ayodhya/ayodhyaPackage5.jpg'
import ScrollToTop from '../ScrollToTop';

const RamMandirPackage = () => {

  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5
  ])

  return (
    <>
      <ScrollToTop />
      <div className='text-start font-extrabold text-2xl my-3'>Ram Mandir, Ayodhya</div>
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
        <h1 className=' text-2xl font-bold my-2'>About Ram Mandir Ayodhya</h1>
        <p className='my-2'>
          The Ram Mandir, situated in the ancient city of Ayodhya, Uttar Pradesh, is a symbol of profound religious and cultural significance for millions of Hindus around the world. This temple is dedicated to Lord Ram, a revered deity in Hinduism and the central figure of the epic Ramayana.
        </p>

        <h1 className='font-bold'>Historical Significance</h1>

        <p className='my-2'>Ayodhya is believed to be the birthplace of Lord Ram, making it a pivotal pilgrimage site. The city and the temple hold a cherished place in Hindu mythology and history, attracting devotees and visitors year-round.
        </p>
        <h1 className=' font-bold'>Architectural Marvel</h1>

        <p className='my-2'>The Ram Mandir is an architectural masterpiece, showcasing traditional Hindu temple design. Its grandeur is accentuated by intricate carvings, detailed sculptures, and an overall design that reflects the magnificence of ancient Indian architecture. The temple's construction incorporates high-quality sandstone, which adds to its majestic appearance.
        </p>
        <h1 className='font-bold'>Cultural and Religious Importance</h1>

        <p className='my-2'>Beyond its architectural beauty, the Ram Mandir stands as a beacon of spiritual unity and devotion. It is a place where devotees gather to offer prayers, participate in rituals, and celebrate various festivals associated with Lord Ram. The temple's sanctum sanctorum is especially revered, housing the idol of Lord Ram, which is the focal point of worship.
        </p>
        <h1 className=' font-bold'>Recent Developments</h1>

        <p className='my-2'>The foundation stone for the new temple was laid on August 5, 2020, following a landmark Supreme Court verdict in 2019 that allowed for the construction of the temple on the disputed site. This event marked the culmination of a prolonged legal and socio-political struggle, emphasizing the site's significance in contemporary Indian society.
        </p>
        <h1 className=' font-bold'>Visitor Information</h1>
        <p className='my-2'>The Ram Mandir is accessible to pilgrims and tourists from around the world. Ayodhya is well-connected by road, rail, and air, making it convenient for visitors to explore the spiritual heritage of the city. The temple complex also features various amenities to accommodate the needs of the pilgrims.
        </p>
      </div>
    </>
  );
};

export default RamMandirPackage;