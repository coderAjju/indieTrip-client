import React from 'react'
import grouptour from '../../assets/groupTour.jpg'
import Form from '../Form/Form'
export const GroupTour = () => {
  return (
    <div className=' h-screen w-full relative'>
        <div className=' h-screen w-full bg-indigo-700' style={{ backgroundImage: `url(${grouptour})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className=' absolute w-[100%] md:w-96 h-screen md:right-8 flex justify-center items-center'>
            <Form />
          </div>
        </div>
      </div>
  )
}
