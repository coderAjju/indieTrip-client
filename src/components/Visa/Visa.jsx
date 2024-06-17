import React from 'react'
import visaCard from '../../assets/credit_cards.jpg'
import Form from '../Form/Form.jsx'
const Visa = () => {
  return (
    <>
      <div className='h-[760px] w-full'>
        <div className=' h-full w-full' style={{ backgroundImage: `url(${visaCard})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='absolute w-full h-screen'>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Visa