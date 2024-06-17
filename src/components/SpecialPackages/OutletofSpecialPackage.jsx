import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const OutletofSpecialPackage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='w-[90%] mx-auto my-5'>
                <button onClick={() => navigate(-1)} className='p-2 px-4 active:bg-blue-600 active:text-white border-gray-400 border-2 rounded'>Previous</button>
                <Outlet />
            </div>
        </>
    )
}

export default OutletofSpecialPackage