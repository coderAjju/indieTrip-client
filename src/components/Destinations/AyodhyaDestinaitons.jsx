import React from 'react'
import homeImg from '../../assets/ayodhya/ayodhyaPackage3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import AyodhyaPackage1 from '../../assets/ayodhya/ayodhyaPackage5.jpg'
import ScrollToTop from '../ScrollToTop'

const AyodhyaDestinaitons = () => {
  const navigate = useNavigate();
  return (
    <>
    <ScrollToTop />
      <div className=' w-full'>
        <img className=' object-contain lg:object-cover w-full lg:h-[700px]' src={homeImg} alt="ayodhyaImg" />
        <div className=' w-[90%] mx-auto'>
          <h1 className=' font-bold my-3 text-4xl'>Information about Ayodhya</h1>
          <div className='flex flex-col gap-2'>
            <p>In addition to its religious significance, Ayodhya is also steeped in history and mythology. The city is believed to have been the capital of the ancient Kosala Kingdom, as described in the Hindu epic, Ramayana. Visitors to Ayodhya can explore various historical sites and monuments that testify to the city's rich past.
            </p>
            <p>
              The serene banks of the sacred Sarayu River offer a peaceful retreat for pilgrims and tourists alike. The ghats along the river provide a picturesque setting for spiritual reflection and relaxation. A boat ride along the Sarayu River allows visitors to take in the tranquil scenery and experience the city from a unique perspective.
            </p>
            <p>
              Ayodhya is also known for its vibrant festivals and celebrations. The city comes to life during festivals such as Diwali, when the entire town is illuminated with decorative lights, creating a mesmerizing sight. The atmosphere is filled with joy and fervor as people come together to celebrate the triumph of good over evil.
            </p>
            <p>
              Furthermore, Ayodhya's cultural heritage is reflected in its traditional arts, music, and cuisine. Visitors can indulge in the city's delectable local dishes and experience the warmth of its hospitable residents.
            </p>
            <p>
              Whether you are drawn to Ayodhya for its religious significance, historical allure, or cultural vibrancy, the city promises a captivating and fulfilling experience for all who visit.
            </p>
          </div>
          <h1 className=' font-bold my-3 text-4xl mt-8 underline'>Special Packages</h1>
        </div>
        <div className=' flex my-6 md:w-[90%] md:mx-auto md:flex-nowrap sm:flex-wrap items-center gap-7 flex-col md:flex-row'>
          <Link onClick={() => navigate('/package/ayodhyaPackage')}>
            <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
              <div className='w-72 h-64 overflow-hidden rounded-md relative '>
                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={AyodhyaPackage1} alt="not found" />
                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 1</h1>
              </div>
              <div className='py-4'>
                <h2 className='text-xl font-normal pl-2'>Ram Mandir, Ayodhya</h2>
              </div>
            </div>
          </Link>

        </div>
      </div >
    </>
  )
}

export default AyodhyaDestinaitons