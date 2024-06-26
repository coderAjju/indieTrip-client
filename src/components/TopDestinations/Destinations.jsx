import React from "react";
import ayodhyaPackage1 from '../../assets/ayodhya/ayodhyaPackage1.jpg';
import Photo2 from "../../assets/prayagraj/prayagrajPackage1.jpg";
import Photo3 from "../../assets/varanasi/varanasiPackage1.jpg";
import himachalPradesh from '../../assets/himachalPradesh/himachalPradeshPackage1.jpg'
import goaImage from '../../assets/Goa/goaPackage1.jpg'
import { Slide } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const CardsData = [
  {
    id: 1,
    img: ayodhyaPackage1,
    title: "Ayodhya",
    link: "/destination/ayodhya",
  },
  {
    id: 2,
    img: Photo2,
    title: "Prayagraj",
    link: "/destination/prayagraj",
  },
  {
    id: 3,
    img: Photo3,
    title: "Varanasi",
    link: "/destination/varanasi",
  },
  {
    id: 4,
    img: himachalPradesh,
    title: "Himachal Pradesh",
    link: "/destination/himachal Pradesh",
  },
  {
    id: 5,
    img: goaImage,
    title: "Goa",
    link: "/destination/goa",
  },
];
const Destinations = () => {
  const navigate = useNavigate();
  return (
   <>
   <ScrollToTop/>
     <div className="lg:w-[1200px] md:w-[767px] mx-auto">
      <button onClick={() => navigate(-1)} className='mt-4 ml-2 p-2 px-4 active:bg-blue-600 active:text-white border-gray-400 border-2 rounded'>Previous</button>
      <h1 className=" w-full font-bold md:text-4xl py-3 text-3xl md:pl-0 pl-2">Top Destinations</h1>
      {/* cards section */}
      <div className="mb-4 flex flex-wrap justify-center md:justify-start lg:px-0 px-0 md:px-6 md:gap-x-32 gap-7 lg:gap-4">
        {CardsData.map(({ id, img, title, link }) => {
          return (    
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group w-72 h-96"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full max-w-[300px] rounded-lg object-cover"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <div>
                      <Link onClick={()=>navigate(link) }>
                        <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300 hover:bg-blue-600">
                          View
                        </button>
                      </Link>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>
   </>
  );
};

export default Destinations;