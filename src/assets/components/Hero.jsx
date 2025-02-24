import React from "react";
import { GrFormNext } from "react-icons/gr";
import herol1 from "../images/herol1.jpg";
import herol2 from "../images/herol2.jpg";
import heroimg from "../images/heroIMG.png";
import herosubimg from "../images/herosubIMG.jpg";
import { MdFavoriteBorder } from "react-icons/md";
const HeroContent = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-7 mx-5">
      <div className="bg-gray-100 md:col-span-2 min-h-[20px] p-7  rounded-xl w-full lg:grid lg:grid-cols-2">
        <div className="lg:flex lg:flex-col lg:gap-8 space-y-10 lg:space-y-3">
          <h2 className="text-4xl font-semibold lg:text-6xl md:mt-5 lg:mt-0">
            Health Care & <br />
            Cleaning Product
          </h2>
          <p className="text-gray-500 text-xl break-words max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="flex justify-start max-w-md gap-2">
            <button
              className="flex justify-center items-center px-4 py-2 bg-black text-white rounded-full cursor-pointer"
              onClick={() => {
                console.log("BuyMore");
              }}
            >
              Buy Now
            </button>
            <button
              className="flex justify-center items-center px-4 py-2 underline cursor-pointer"
              onClick={() => {
                console.log("knowMore");
              }}
            >
              Know More!
            </button>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="absolute right-0 top-0 w-fit h-fit bg-white rounded-lg z-20 p-3 shadow-md">
            <p className="text-sm text-gray-700 font-semibold">loremipsumut</p>

            <div className="flex items-center gap-3">
              <p className="text-xl text-black font-bold">loremii</p>
              <MdFavoriteBorder className="hover:text-red-500" />
            </div>

            <p className="text-sm text-gray-300 pt-2 text-center">ipsum</p>
          </div>

          <div className="absolute right-0 bottom-15 w-fit h-fit bg-white rounded-lg z-20 p-3 shadow-md">
            <p className="text-sm text-gray-700 font-semibold">
              loremipsumutedwecdfd
            </p>

            <div className="flex items-center gap-3">
              <p className="text-xl text-black font-bold">loremii</p>
            </div>

            <p className="text-lg font-semibold text-orange-500 my-1 ">
              ipsumsdwdsxsfe
            </p>

            <p className="text-sm text-gray-700 font-semibold">loremipsu</p>
          </div>
          <div className="absolute left-0 bottom-15 w-fit h-fit bg-white rounded-lg z-20">
            <div className="flex gap-1">
              <img
                src={herosubimg}
                alt=""
                className="h-25 w-25 rounded-lg shadow-md"
              />
            </div>
          </div>
          <img src={heroimg} alt="" className="w-full h-full aspect-square" />
        </div>
      </div>

      <div className="bg-gray-100 min-h-[20px] rounded-xl">
        <div className="flex flex-row m-5 bg-white rounded-md">
          <div className="flex flex-10/12 overflow-x-hidden">
            <div className="container flex-1/2 m-2.5 ">
              <p className="text-sm text-gray-700 font-semibold">
                loremipsumut
              </p>
              <p className="text-xl text-black font-bold">loremii</p>
              <p className="text-sm text-gray-400 pt-2">lorem ipsum ut</p>
            </div>
            <div className="container flex-1/2 m-2.5">
              <p className="text-sm text-gray-700 font-semibold ">
                loremipsumut
              </p>
              <p className="text-xl text-black font-bold">loremii</p>
              <p className="text-sm text-gray-400 pt-2">lorem ipsum ut</p>
            </div>
          </div>

          <div className="flex-2/12 flex items-center justify-center">
            <GrFormNext className="text-center" />
          </div>
        </div>
        <div className="m-5 bg-white rounded-md min-h-[20px] p-2">
          <div className="flex justify-between items-center ">
            <h3 className="text-2xl font-semibold">Product</h3>
            <p className="text-lg text-gray-600">VisitIn</p>
          </div>
          <div className="grid grid-cols-2 gap-2 min-h-[150px]">
            <div className="rounded-xl p-5 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded-xl w-full aspect-square object-cover"
                src={herol1}
                alt="Product Image"
              />
              <p className="font-medium text-sm text-gray-600 mt-3 text-center">
                Lorem ipsum dolor
              </p>
              <h3 className="font-bold text-2xl text-gray-900 my-3 text-center">
                $209
              </h3>
              <p className="font-semibold text-sm text-center text-green-600 bg-green-100 rounded-md py-1">
                20% OFF
              </p>
            </div>

            <div className="rounded-xl p-5 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                className="rounded-xl w-full aspect-square object-cover"
                src={herol2}
                alt="Product Image"
              />
              <p className="font-medium text-sm text-gray-600 mt-3 text-center">
                Lorem ipsum dolor
              </p>
              <h3 className="font-bold text-2xl text-gray-900 my-3 text-center">
                $209
              </h3>
              <p className="font-semibold text-sm text-center text-green-600 bg-green-100 rounded-md py-1">
                20% OFF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
