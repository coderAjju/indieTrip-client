import React from 'react'
import homeImg from '../../assets/prayagraj/prayagrajPackage1.jpg'
import { Link, useNavigate } from 'react-router-dom'
import vanarasiPackage1 from '../../assets/varanasi/varanasiPackage1.jpg'
import ScrollToTop from '../ScrollToTop'
const PrayagrajDestinations = () => {
  const navigate = useNavigate();
  return (
    <>
    <ScrollToTop />
      <div className=' w-full'>
        <img className=' object-contain lg:object-fill w-full lg:h-[700px]' src={homeImg} alt="ayodhyaImg" />
        <div className=' w-[90%] mx-auto'>
          <h1 className=' font-bold my-3 text-4xl'>Information about Prayagraj</h1>
          <div className='flex flex-col gap-2'>
            <p>Prayagraj, formerly known as Allahabad, is a city rich in history, culture, and spirituality, located in the northern Indian state of Uttar Pradesh. It is renowned for being one of the holiest cities in Hinduism, where the sacred rivers Ganges, Yamuna, and the mythical Saraswati converge at the Triveni Sangam. This confluence makes Prayagraj a focal point for pilgrims, especially during the Kumbh Mela, the largest religious gathering in the world, held every twelve years.
            </p>
            <p>
            The city is also steeped in historical significance. It served as a major center during the Indian independence movement, with many freedom fighters and prominent leaders, including Jawaharlal Nehru, hailing from this region. The Anand Bhavan, the ancestral home of the Nehru family, is now a museum that provides insight into India's struggle for independence.
            </p>
            <p>
            Prayagraj is home to the majestic Allahabad Fort, built by Emperor Akbar in 1583, which stands as a testament to the city’s Mughal heritage. The fort houses the ancient Ashoka Pillar, a 3rd-century BC edict, adding another layer to its historical allure.
            </p>
            <p>
            The city’s cultural landscape is enriched by its vibrant festivals, such as Magh Mela and Diwali, which light up the streets with festivities and traditional performances. The Prayagraj Literature Festival celebrates the region's literary heritage, attracting writers and intellectuals from across the country.
            </p>
            <p>
            Modern Prayagraj blends its historical and spiritual heritage with contemporary development. Its bustling bazaars, educational institutions, and the scenic Yamuna Bridge offer a glimpse into its dynamic growth. Visiting Prayagraj is an immersion into a city where the past and present harmoniously coexist, offering an enriching experience for every traveler.
            </p>
          </div>
          <h1 className=' font-bold my-3 text-4xl mt-8 underline'>Special Packages</h1>
        </div>
        <div className=' flex my-6 md:w-[90%] md:mx-auto md:flex-nowrap sm:flex-wrap items-center gap-7 flex-col md:flex-row'>
          <Link onClick={()=>navigate('package/kashiPackage')}>
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

export default PrayagrajDestinations