import React from 'react'
import { Link } from 'react-router-dom'
import spImage1 from '../../assets/specialPackage1.jpg'
import spImage2 from '../../assets/specialPackage2.jpg'
import spImage3 from '../../assets/specialPackage3.jpg'
import spImage4 from '../../assets/specialPackage4.jpg'
import './Home.css'
const SpecialPackage = () => {
    return (
        <>
            <div className='md:w-[1200px] mx-auto'>
                <h1 className=' font-bold md:text-4xl py-8 text-3xl md:pl-0 pl-2'>Special Packages</h1>
                <div className='flex md:justify-between items-center gap-7 flex-col md:flex-row'>
                    <Link >
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage1} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={spImage2} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage3} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage4} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className=' w-full flex justify-center items-center my-3 mt-6'>
                    <Link to='/specialPackages'>
                        <button className=' bg-blue-600 px-4 py-1 text-white font-medium rounded'>View all special packages</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SpecialPackage