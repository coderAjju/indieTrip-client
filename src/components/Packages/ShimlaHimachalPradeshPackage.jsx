import React, { useState } from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import image1 from '../../assets/himachalPradesh/himachalPradeshPackage1.jpg'
import image2 from '../../assets/himachalPradesh/himachalPradeshPackage2.jpg'
import image3 from '../../assets/himachalPradesh/himachalPradeshPackage3.jpg'
import image4 from '../../assets/himachalPradesh/himachalPradeshPackage4.jpg'
import image5 from '../../assets/himachalPradesh/himachalPradeshPackage5.jpg'
import ScrollToTop from '../ScrollToTop';

const ShimlaHimachalPradeshPackages = () => {

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
      <div className='text-start font-extrabold text-2xl my-3'>Shimla, Himachal Pradesh</div>
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
        <h1 className=' text-2xl font-bold my-2'>About Shimla Himachal Pradesh</h1>
        <p className='my-2'>
          Nestled in the serene lap of the Himalayas, Shimla is the capital city of Himachal Pradesh, renowned for its captivating natural beauty and colonial charm. Established as the summer capital of British India, Shimla retains its historical grandeur while embracing modernity.        </p>
        <h1 className='font-bold'>A Blend of History and Nature
        </h1>
        <p className='my-2'>
          Shimla's enchanting landscape is dotted with verdant forests, undulating hills, and a skyline often adorned with snow-capped peaks. The Ridge, a spacious open space in the heart of the town, offers breathtaking views of the surrounding mountains and serves as a focal point for cultural activities.        </p>
        <h1 className=' font-bold'>Adventure and Recreation</h1>
        <p className='my-2'>Shimla is not just about scenic beauty; it also caters to adventure enthusiasts. From trekking and skiing to river rafting and camping, the options are plenty. Kufri, a short drive from Shimla, is a popular destination for winter sports and a delightful summer retreat.
        </p>
        <h1 className='font-bold'>Climate and Best Time to Visit</h1>
        <p className='my-2'>Shimla experiences pleasant summers, with temperatures ranging from 15°C to 30°C, making it an ideal escape from the scorching heat of the plains. Winters are chilly, with temperatures often dropping below freezing, and the town transforms into a snowy wonderland. The best time to visit is from March to June and October to November.
        </p>
        <h1 className='font-bold'>Cultural Heritage</h1>
        <p className='my-2'>Shimla's cultural heritage is a vibrant amalgamation of various influences. The town hosts numerous festivals and fairs, such as the Summer Festival, which showcases local music, dance, and cuisine.
        </p>
      </div>
    </>
  );
};

export default ShimlaHimachalPradeshPackages;