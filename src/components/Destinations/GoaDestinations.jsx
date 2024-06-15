import React from 'react'
import homeImg from '../../assets/Goa/goaPackage3.jpg'
import { Link, useNavigate } from 'react-router-dom'
import goaPackage from '../../assets/Goa/goaPackage4.jpg'

const GoaDestinations = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=' w-full'>
        <img className=' object-contain lg:object-fill w-full lg:h-[700px]' src={homeImg} alt="ayodhyaImg" />
        <div className=' w-[90%] mx-auto'>
          <h1 className=' font-bold my-3 text-4xl'>Information about Goa</h1>
          <div className='flex flex-col gap-2'>
            <p>Goa, India's smallest state, is blessed with a vibrant blend of sun-kissed beaches, rich heritage, and a laid-back tropical vibe. This coastal paradise attracts millions of tourists each year, seeking an escape from the routine and a chance to soak up the relaxed Goan way of life.
            </p>
            <p>
            The beaches of Goa are the heart and soul of the state, offering something for everyone. Whether you're looking for a serene spot to unwind, a buzzing party atmosphere, or a secluded cove for some solitude, Goa has it all. From the popular stretches of Calangute, Baga, and Anjuna to the pristine sands of the less-crowded beaches like Morjim, Ashwem, and Palolem, each beach has its own unique charm.
            </p>
            <p>
            In addition to its natural beauty and cultural heritage, Goa is also a hub for adventure seekers. From water sports like jet-skiing, parasailing, and kayaking to thrilling treks in the Western Ghats, there are plenty of activities to get your adrenaline pumping. Goa's lush forests and rivers also offer opportunities for wildlife spotting, bird watching, and boating.
            </p>
            <p>
            Goa's vibrant nightlife is legendary. The state comes alive after dark with a multitude of clubs, beachside shacks, and bars offering live music, DJ performances, and dance parties. Whether you prefer the hip vibe of North Goa's nightclubs or the laid-back beach shacks of South Goa, there is something for everyone to enjoy as the night unfolds.
            </p>
          </div>
          <h1 className=' font-bold my-3 text-4xl mt-8 underline'>Special Packages</h1>
        </div>
        <div className=' flex my-6 md:w-[90%] md:mx-auto md:flex-nowrap sm:flex-wrap items-center gap-7 flex-col md:flex-row'>
          <Link onClick={() => navigate('/package/goaPackage')}>
            <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
              <div className='w-72 h-64 overflow-hidden rounded-md relative '>
                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={goaPackage} alt="not found" />
                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 1</h1>
              </div>
              <div className='py-4'>
                <h2 className='text-xl font-normal pl-2'>Baga Beach, Goa</h2>
              </div>
            </div>
          </Link>

        </div>
      </div >
    </>
  )
}

export default GoaDestinations