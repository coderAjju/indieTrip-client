import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../../assets/logo.png'

const Navbar = () => {
  let links = [
    {name:'Home',link:"/",id:1},
    {name:'Visa',link:"/Visa",id:2},
    {name:"Blogs",link:"/Blog",id:3},
    {name:"Group Tour",link:"/grouptour",id:4},
  ]

  const [isOpen, setisOpen] = useState(false);

  return(
    <div className=' shadow-md w-full sticky top-[-2px] left-0 bg-white z-[2]'>
      <div className='md:px-10 px-7 flex justify-between items-center '>
        {/* logo */}
        <div className=''>
          <Link to='/' className='flex justify-center items-center'>
            <img className=' w-14 md:w-16' src={logo} alt="logo" /> <span className=' font-bold'>IndieTrip</span>
          </Link>
        </div>

        {/* menu icon */}
        <div onClick={()=>setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-3 cursor-pointer md:hidden'>
            {
                isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon/>
            }
            
        </div>
        {/* nav links */}
        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto transition-all bg-white duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-499px]'}`}>
          {links.map((elem)=>
            <li key={elem.id} className=' flex justify-start items-center my-7 font-semibold md:my-0 md:ml-8'>
              <NavLink onClick={()=>setisOpen(!isOpen)} to={elem.link} className={({isActive})=>`${isActive ? " text-blue-600" : " text-black"}`}>{elem.name}</NavLink>
            </li>
          )}
          <li className='flex justify-start items-center'>
            <Link to="/form" className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static'>Any Query</Link>
          </li>
        </ul>
      </div>
    </div>
  ) 
}

export default Navbar