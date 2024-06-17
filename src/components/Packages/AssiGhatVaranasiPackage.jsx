import React, { useState } from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import image1 from '../../assets/varanasi/varanasiPackage1.jpg'
import image2 from '../../assets/varanasi/varanasiPackage2.jpg'
import image3 from '../../assets/varanasi/varanasiPackage3.jpg'
import image4 from '../../assets/varanasi/varanasiPackage4.jpg'
import ScrollToTop from '../ScrollToTop';

const AssiGhatVaranasiPackage = () => {

  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
  ])

  return (
    <>
      <ScrollToTop />
      <div className='text-start font-extrabold text-2xl my-3'>Assi Ghat, Varanasi</div>
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
        <h1 className=' text-2xl font-bold my-2'>About Assi Ghat Varanasi</h1>
        <p className='my-2'>
          Assi Ghat, located in the southern part of Varanasi, is one of the most renowned and visited ghats along the sacred Ganges River. Known for its tranquil ambiance and spiritual significance, Assi Ghat holds a special place in the hearts of locals and visitors alike.
        </p>
        <h1 className='font-bold'>Historical and Cultural Significance</h1>
        <p className='my-2'> 
        Assi Ghat is deeply rooted in Hindu mythology and culture. It is believed that this is the place where the famous poet-saint Tulsidas composed the Ramcharitmanas, a retelling of the Ramayana. The ghat gets its name from the Assi River, which meets the Ganges at this point, creating a confluence that is considered highly auspicious.
        </p>
        <h1 className=' font-bold'>Spiritual Activities</h1>
<p className='my-2'>Pilgrims flock to Assi Ghat to perform rituals and take a holy dip in the Ganges, especially during religious festivals. The ghat is also famous for its daily Ganga Aarti, a mesmerizing ritual of offering prayers to the river, which attracts hundreds of devotees and tourists every evening. The serene mornings at Assi Ghat are marked by the chanting of mantras and the practice of yoga, creating a peaceful and rejuvenating atmosphere.</p>

<h1 className='font-bold'>Tourist Attractions</h1>
<p className=' my-2'>Beyond its spiritual allure, Assi Ghat is a vibrant cultural hub. The area is dotted with numerous cafes, bookshops, and guesthouses that cater to the needs of travelers. Visitors can enjoy boat rides on the Ganges, offering a unique perspective of the ghats and the city's historic architecture. The nearby streets are bustling with local markets, where one can shop for traditional handicrafts, silk sarees, and other souvenirs.</p>

<h1 className='font-bold'>Conclusion</h1>
<p>Assi Ghat encapsulates the essence of Varanasi – a blend of spirituality, culture, and everyday life. Its welcoming vibe, combined with the rich tapestry of rituals and traditions, makes it a must-visit destination for anyone exploring the ancient city of Varanasi.</p>
      </div>
    </>
  );
};

export default AssiGhatVaranasiPackage;