import React from 'react';
import {Link} from 'react-router-dom'
import visaLogo from '../../assets/visa-logo.svg'
import paytmLogo from '../../assets/paytm-logo.svg'
import upiLogo from '../../assets/upi-logo.svg'
import googlePayLogo from '../../assets/google-pay-logo.svg'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="bg-gray-600 text-black p-6">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="mb-6 md:mb-0 md:w-[500px]">
        <Link to='/' className='flex justify-start items-center'>
            <img className='w-36' src={logo} alt="logo" />
           </Link>
          <div className="mt-4">
            <div className="flex items-start mb-4">
              <span className="mr-2">🌍</span>
              <div className='text-white'>
                <strong >Expertise:</strong> Our knowledgeable consultants travel extensively, providing first-hand advice to ensure the best experiences.
              </div>
            </div>
            <div className="flex items-start mb-4">
              <span className="mr-2">🔄</span>
              <div className='text-white'>
                <strong>Convenience:</strong> We seamlessly coordinate flights, transfers, and tours for Link hassle-free journey.
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2">💬</span>
              <div className='text-white'>
                <strong>Reliability:</strong> Trusted by hundreds of satisfied customers who travel with us regularly.
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 md:mb-0 text-white">
          <h2 className="font-bold text-xl">Related Links</h2>
          <ul className="mt-4">
            <li><Link className="hover:text-gray-400">Home</Link></li>
            <li><Link className="hover:text-gray-400">About Us</Link></li>
            <li><Link className="hover:text-gray-400">Contact Us</Link></li>
            <li><Link className="hover:text-gray-400">Our Services</Link></li>
            <li><Link to="/termsCondition" className="hover:text-gray-400">Terms and Conditions</Link></li>
            <li><Link to="/privacyPolicy" className="hover:text-gray-400">Our Policy</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 text-white">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <div className="mt-4">
            <p>Delhi Address: 102, 2nd Floor, Nehru Complex, Pandav Nagar, Delhi - 110092</p>
            <p>Lucknow: Lgf-137, Khazana Market Ashiyana Lucknow UP-226012</p>
            <p>CHENNAI: No. 58 AP Road Chennai Tamilnadu 600112</p>
            <p>📞 +916395952025</p>
            <p>✉️ info@indietrip.com</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl text-white">Connect With Us</h2>
          <div className="flex mt-4 space-x-2">
            <a href = "https://www.facebook.com/people/IndieTrip/61558576468798/" className="hover:text-blue-700  text-[#1877F2] text-3xl transition-all"><i class="fa-brands fa-square-facebook"></i></a>
            <Link className="hover:text-gray-800  text-black-950 text-3xl transition-all"><i class="fa-brands fa-square-x-twitter"></i></Link>
            <a href="https://www.instagram.com/indietrip_/?igsh=MTNidmVzbjV0cDJxcA%3D%3D" className="hover:text-pink-700 text-[#f656c6] text-3xl transition-all"><i class="fa-brands fa-square-instagram"></i></a>
            <Link className="hover:text-blue-700  text-[#1877F2] text-3xl transition-all"><i class="fa-brands fa-linkedin"></i></Link>
          </div>
          <h2 className="font-bold text-xl mt-4 text-white">We Accept</h2>
          <div className="flex mt-4 space-x-2">
            <span><img className=' w-16 p-1 bg-white h-6' src={visaLogo} alt="visa" /></span>
            <span><img className=' w-16 p-1 bg-white h-6' src={paytmLogo} alt="visa" /></span>
            <span><img className=' w-16 p-1 bg-white h-6' src={upiLogo} alt="visa" /></span>
            <span><img className=' w-16 p-1 bg-white h-6' src={googlePayLogo} alt="visa" /></span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-white">
        © 2023 <Link to="/termsCondition" className=' text-gray-400 hover:text-white'>Indie Trip</Link> All rights reserved. | Powered By TraviYo
      </div>
    </div>
  );
};

export default Footer;
