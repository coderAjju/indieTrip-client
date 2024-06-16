import React from 'react'
import homeImg from '../../assets/himachalPradesh/himachalPradeshPackage3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import himachalPradeshPackage2 from '../../assets/himachalPradesh/himachalPradeshPackage2.jpg'
import ScrollToTop from '../ScrollToTop'
const HimachalPradeshDestinations = () => {
  const navigate = useNavigate();
  return (
    <>
    <ScrollToTop />
      <div className=' w-full'>
        <img className=' object-contain lg:object-fill w-full lg:h-[700px]' src={homeImg} alt="ayodhyaImg" />
        <div className=' w-[90%] mx-auto'>
          <h1 className=' font-bold my-3 text-4xl'>Information about Himachal Pradesh</h1>
          <div className='flex flex-col gap-2'>
            <p>Nestled in the lap of the Himalayas, Himachal Pradesh is a paradise for nature lovers and adventure enthusiasts alike. Known for its picturesque landscapes, this northern Indian state boasts snow-capped mountains, lush valleys, and pristine rivers. The capital city, Shimla, once the summer capital of British India, exudes colonial charm with its grand architecture and bustling Mall Road.
            </p>
            <p>
              Manali, another gem, attracts thrill-seekers with its opportunities for skiing, paragliding, and trekking. The serene town of Dharamshala, home to the Dalai Lama and a large Tibetan community, offers a unique blend of spiritual and cultural experiences. McLeod Ganj, with its monasteries and vibrant markets, provides a glimpse into Tibetan life.
            </p>
            <p>
              For those seeking tranquility, the quiet hamlets of Kullu, Kasol, and Spiti Valley offer a retreat into nature’s embrace. The state's rich biodiversity is preserved in numerous national parks and wildlife sanctuaries, like the Great Himalayan National Park.
            </p>
            <p>
              Himachal Pradesh is also renowned for its festivals, such as Dussehra in Kullu and the Buddhist Losar festival, which showcase its rich cultural heritage. Whether you're exploring its bustling towns or serene villages, Himachal Pradesh promises an unforgettable journey through its stunning landscapes and vibrant traditions.
            </p>
          </div>
          <h1 className=' font-bold my-3 text-4xl mt-8 underline'>Special Packages</h1>
        </div>
        <div className=' flex my-6 md:w-[90%] md:mx-auto md:flex-nowrap sm:flex-wrap items-center gap-7 flex-col md:flex-row'>
          <Link onClick={()=>navigate('/package/shimla')}>
            <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
              <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={himachalPradeshPackage2} alt="not found" />
                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 1</h1>
              </div>
              <div className='py-4'>
                <h2 className='text-xl font-normal pl-2'>Shimla, Himachal Pradesh</h2>
              </div>
            </div>
          </Link>

        </div>
      </div >
    </>
  )
}

export default HimachalPradeshDestinations