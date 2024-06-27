import React from "react";
import Photo2 from "../../assets/prayagraj/prayagrajPackage1.jpg";
import himachalPradesh from '../../assets/himachalPradesh/himachalPradeshPackage1.jpg'
import varanasi from '../../assets/varanasi/varanasiPackage1.jpg'
import ayodhyaPackage1 from '../../assets/ayodhya/ayodhyaPackage1.jpg'

import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CardsData = [
  {
    id: 1,
    img: ayodhyaPackage1,
    title: "Ayodhya",
    link: "destination/ayodhya",
  },
  {
    id: 2,
    img: Photo2,
    title: "Prayagraj",
    link: "destination/prayagraj",
  },
  {
    id: 3,
    img: varanasi,
    title: "Varanasi",
    link: "destination/varanasi",
  },
  {
    id: 4,
    img: himachalPradesh,
    title: "Himachal Pradesh",
    link: "destination/himachal Pradesh",
  },

];
const TopDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-[1200px] md:w-[767px] mx-auto mt-2 mb-10">
      <h1 className=" w-full font-bold md:text-4xl py-8 text-3xl md:pl-0 pl-2">Top Destinations</h1>
      {/* cards section */}
      <div className=" flex flex-wrap justify-evenly gap-7 lg:gap-4 ">
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
                      <Link onClick={() => navigate(link)}>
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
      <div className=' w-full flex justify-center items-center my-3 mt-6'>
        <Link to='/destinations'>
          <button className=' bg-blue-600 px-4 py-1 text-white font-medium rounded hover:bg-blue-700 transition ease-in duration-75'>View all Top Destinations</button>
        </Link>
      </div>
    </div>
  );
};

export default TopDestination;