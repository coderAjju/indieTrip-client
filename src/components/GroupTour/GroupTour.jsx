import React from 'react'
import grouptour from '../../assets/groupTour.jpg'
import Form from '../Form/Form'
export const GroupTour = () => {
  return (
    <div className=' h-[760px] w-full'>
        <div className='h-full w-full' style={{ backgroundImage: `url(${grouptour})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='absolute w-full h-screen '>
            <Form />
          </div>
        </div>
      </div>
  )
}
