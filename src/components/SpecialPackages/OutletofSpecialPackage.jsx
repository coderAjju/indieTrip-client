import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const OutletofSpecialPackage = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(-1)} className='ml-2 p-2 px-4 active:bg-blue-600 active:text-white border-gray-400 border-2 rounded'>Previous</button>

            <div>OutletofSpecialPackage</div>
            <Outlet />
        </>
    )
}

export default OutletofSpecialPackage