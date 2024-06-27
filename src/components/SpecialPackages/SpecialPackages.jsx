import React from 'react'
import { Link } from 'react-router-dom'
import spImage3 from '../../assets/prayagraj/prayagrajPackage1.jpg'
import goaPackage1 from '../../assets/Goa/goaPackage1.jpg'
import spImage2 from '../../assets/ayodhya/ayodhyaPackage5.jpg'
import himachalPradeshPackage2 from '../../assets/himachalPradesh/himachalPradeshPackage2.jpg'
import vanarasiPackage1 from '../../assets/varanasi/varanasiPackage1.jpg'
import himachalpradesh from '../../assets/himachalPradesh/himachalPradeshPackage2.jpg'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'
const SpecialPackages = () => {
    const navigate = useNavigate();
    return (
        <>
        <ScrollToTop/>
            <div className='lg:w-[1200px] md:w-[767px] mx-auto'>
                <button onClick={() => navigate(-1)} className='ml-2 mt-4 p-2 px-4 active:bg-blue-600 active:text-white border-gray-400 border-2 rounded'>Previous</button>
                <h1 className='font-bold md:text-4xl py-4 text-3xl  md:pl-0 pl-2'>Special Packages</h1>
                <div className=' flex flex-wrap justify-center md:justify-start gap-7 lg:gap-4 lg:px-0 px-0 md:px-6 md:gap-x-32'>
                    <Link onClick={() => navigate("/package/bagaBeach")}>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={goaPackage1} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 1</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Baga Beach, North Goa</h2>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => navigate("/package/ramMandir")}>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative '>
                                <img className=' w-full h-full transition-all ease-in duration-200 rounded-t-md' src={spImage2} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 2</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Ram Mandir, Ayodhya</h2>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => navigate("/package/assiGhat")}>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={vanarasiPackage1} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 3</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Assi Ghat, Varanasiss</h2>
                            </div>
                        </div>
                    </Link>

                    <Link onClick={() => navigate('/package/akbarFort')}>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={spImage3} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 4</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Akbar fort, Prayagraj</h2>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => navigate("/package/shimla")}>
                        <div className='shadow-md inline-block spCard transition-all hover:shadow-xl'>
                            <div className='w-72 h-64 overflow-hidden rounded-md relative'>
                                <img className=' w-full h-full transition-all ease-in duration-100 rounded-t-md' src={himachalpradesh} alt="not found" />
                                <h1 className='absolute top-3 rounded-l-2xl font-semibold px-5 py-1 right-0 text-white bg-blue-600'>Package 5</h1>
                            </div>
                            <div className='py-4'>
                                <h2 className='text-xl font-normal pl-2'>Shimla, Himachal Pradesh</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SpecialPackages