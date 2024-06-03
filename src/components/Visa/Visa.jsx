import React from 'react'
import visaCard from '../../assets/credit_cards.jpg'
import Form from '../Form/Form.jsx'
const Visa = () => {
  return (
    <>
      <div className=' h-screen w-full relative'>
        <div className=' h-screen w-full' style={{ backgroundImage: `url(${visaCard})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className=' absolute w-[100%] md:w-96 h-screen md:right-8 flex justify-center items-center'>
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Visa