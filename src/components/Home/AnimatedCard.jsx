import React from "react";
import Photo1 from "../../assets/destination1.jpg";
import Photo2 from "../../assets/destination2.jpg";
import Photo3 from "../../assets/destination3.jpg";
import Photo4 from "../../assets/destination4.jpg";
import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "destination1",
    link: "",
    // desc: "Each character will appear one by one",
  },
  {
    id: 2,
    img: Photo2,
    title: "destination2",
    link: "",
    // desc: "Each character will appear one by one",
  },
  {
    id: 3,
    img: Photo3,
    title: "destination3",
    link: "",
    // desc: "Each character will appear one by one",
  },
  {
    id: 4,
    img: Photo4,
    title: "destination4",
    link: "",
    // desc: "Each character will appear one by one",
  },
];
const AnimatedCard = () => {
  return (
    <div className="md:w-[1200px] mx-auto mt-10">
      <h1 className=" w-full font-bold md:text-4xl py-8 text-3xl md:pl-0 pl-2">Top Destinations</h1>
      {/* cards section */}
      <div className=" w-full bg-indigo-800 flex md:justify-between items-center gap-7 flex-col md:flex-row">
        {CardsData.map(({ id, img, title, desc }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group w-72 h-96"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full max-w-[300px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    {/* <Fade cascade damping={0.05}>
                      {desc}
                    </Fade> */}
                    <div>
                      <Link>
                        <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
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
        <Link>
          <button className=' bg-blue-600 px-4 py-1 text-white font-medium rounded'>View all Top Destinations</button>
        </Link>
      </div>
    </div>
  );
};

export default AnimatedCard;