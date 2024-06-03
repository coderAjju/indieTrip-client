import React from 'react'
import { Link } from 'react-router-dom'
import spImage1 from '../../assets/specialPackage1.jpg'
import spImage2 from '../../assets/specialPackage2.jpg'
import spImage3 from '../../assets/specialPackage3.jpg'
import spImage4 from '../../assets/specialPackage4.jpg'
import { Outlet } from 'react-router-dom'
import '../Home/Home.css'
const SpecialPackages = () => {
    return (
        <>
            <div className='md:w-[1200px] mx-auto py-4'>
                <h1 className='font-bold md:text-4xl py-8 text-3xl md:pl-0 pl-2'>Special Packages</h1>
                <div className=' flex flex-wrap gap-4 md:justify-start md:items-start items-center justify-center'>
                    <Link to="goaPackage">
                        <div className='shadow-md spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage1} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="ayodhyaPackage">
                        <div className='shadow-md spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={spImage2} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="tajmahalPackage">
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage3} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="kashiPackage">
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage4} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="tajmahalPackage">
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage3} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="goaPackage">
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage1} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="ayodhyaPackage">
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md '>
                                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={spImage2} alt="not found" />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Special Package 1</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SpecialPackages