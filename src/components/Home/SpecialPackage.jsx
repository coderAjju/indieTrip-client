import React from 'react'
import { Link } from 'react-router-dom'
import goaPackage1 from '../../assets/Goa/goaPackage1.jpg'
import spImage2 from '../../assets/ayodhya/ayodhyaPackage5.jpg'
import himachalPradeshPackage2 from '../../assets/himachalPradesh/himachalPradeshPackage2.jpg'
import vanarasiPackage1 from '../../assets/varanasi/varanasiPackage1.jpg'
import './Home.css'
const SpecialPackage = () => {
    return (
        <>
            <div className='lg:w-[1200px] md:w-[767px] mx-auto'>
            <h1 className='font-bold md:text-4xl py-8 text-3xl  md:pl-0 pl-2'>Special Packages</h1>
                <div className=' flex flex-wrap justify-evenly gap-7 lg:gap-4 '>
                    <Link to="/package/bagaBeach">
                        <div className='shadow-md spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={goaPackage1} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 1</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Baga Beach, North Goa</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/package/ramMandir">
                        <div className='shadow-md  spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative '>
                                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={spImage2} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 2</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Ram Mandir, Ayodhya</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/package/shimla">
                        <div className='shadow-md spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={himachalPradeshPackage2} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 3</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Shimla, Himachal Pradesh</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/package/assiGhat">
                        <div className='shadow-md spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={vanarasiPackage1} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 4</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Assi Ghat, Varanasi</h2>
                            </div>
                        </div>
                    </Link>

                </div>
                <div className=' w-full flex justify-center items-center my-3 mt-6'>
                    <Link to='/specialPackages'>
                        <button className=' bg-blue-600 px-4 py-1 text-white font-medium rounded hover:bg-blue-700 transition ease-in duration-75   '>View all special packages</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SpecialPackage