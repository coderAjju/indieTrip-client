import React from 'react'
import homeImg from '../../assets/varanasi/varanasiPackage4.jpg'
import { Link, useNavigate } from 'react-router-dom'
import vanarasiPackage1 from '../../assets/varanasi/varanasiPackage1.jpg'
import ScrollToTop from '../ScrollToTop'
const VanarasiDestinations = () => {
  const navigate = useNavigate();
  return (
    <>
    <ScrollToTop />
      <div className=' w-full'>
        <img className=' object-contain lg:object-fill w-full lg:h-[700px]' src={homeImg} alt="ayodhyaImg" />
        <div className=' w-[90%] mx-auto'>
          <h1 className=' font-bold my-3 text-4xl'>Information about Varanasi</h1>
          <div className='flex flex-col gap-2'>
            <p>Varanasi, also known as Kashi or Benares, is one of the oldest continuously inhabited cities in the world and holds a special place in Hinduism, Buddhism, and Jainism. Situated on the banks of the sacred Ganges River in Uttar Pradesh, India, Varanasi is a city where spirituality and tradition permeate every corner.
            </p>
            <p>
            The ghats of Varanasi are the heart and soul of the city. These steps leading down to the river are vibrant with life and activity, where pilgrims perform rituals, take holy dips, and offer prayers. The evening Ganga Aarti at Dashashwamedh Ghat is a mesmerizing spectacle, drawing visitors and devotees with its elaborate ceremonies and devotional hymns.
            </p>
            <p>
            The city is dotted with numerous ancient temples, with the Kashi Vishwanath Temple being the most revered. Dedicated to Lord Shiva, this temple attracts millions of pilgrims each year. Another significant site is the Sankat Mochan Hanuman Temple, which is believed to ward off evils and bring peace.
            </p>
            <p>
            Varanasi is also a significant center for learning and culture. The Banaras Hindu University (BHU) is one of the largest residential universities in Asia, known for its academic excellence and beautiful campus. The city’s narrow lanes are filled with bustling markets, where one can find everything from traditional Banarasi silk sarees to intricate handicrafts.
            </p>
          </div>
          <h1 className=' font-bold my-3 text-4xl mt-8 underline'>Special Packages</h1>
        </div>
        <div className=' flex my-6 md:w-[90%] md:mx-auto md:flex-nowrap sm:flex-wrap items-center gap-7 flex-col md:flex-row'>
          <Link onClick={()=>navigate('/package/assiGhat')}>
            <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
              <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={vanarasiPackage1} alt="not found" />
                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 1</h1>
              </div>
              <div className='py-4'>
                <h2 className='text-xl font-normal pl-2'>Assi Ghat, Varanasi</h2>
              </div>
            </div>
          </Link>

        </div>
      </div >
    </>
  )
}

export default VanarasiDestinations