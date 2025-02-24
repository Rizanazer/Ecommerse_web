import React from "react";
import pdtIMG from "../images/pdtIMG.png";
import cusIMG from "../images/herol1.jpeg";
import { Fa500Px } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import {
  FaPumpSoap,
  FaPaintBrush,
  FaBroom,
  FaSprayCan,
  FaHandHoldingWater,
  FaTools,
  FaMale,
  FaCapsules,
} from "react-icons/fa";

const FilterMenu = () => {
  return (
    <div>
      <div className="my-5 mx-15">
        <hr className="text-gray-400 " />
        <div className="flex flex-wrap gap-2 m-5 justify-between items-center">
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            JHONESON
          </div>
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            BABY
          </div>
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            FACIAL
          </div>
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            FEMALE
          </div>
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            EYELINER
          </div>
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            LIPSTICK
          </div>
          <div className="text-gray-700 text-lg font-semibold hover:text-orange-500 cursor-pointer transition duration-300">
            MAKEUP
          </div>
        </div>
        <hr className="text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-15 ">
        <div className="md:col-span-1 hidden justify-between md:flex md:flex-col">
          <div>
            <h2 className="text-xl font-semibold my-5">CATEGORIES</h2>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaPumpSoap color="#8898aa" />
              Skincare
            </div>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaPaintBrush color="#8898aa" />
              Makeup
            </div>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaBroom color="#8898aa" />
              Haircare
            </div>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaSprayCan color="#8898aa" />
              Fragrances
            </div>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaHandHoldingWater color="#8898aa" />
              Body Care
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold my-5">OTHERS</h2>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaTools color="#8898aa" />
              Beauty Tools
            </div>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaMale color="#8898aa" />
              Men's Grooming
            </div>
            <div className="flex items-center my-3 gap-3 text-lg">
              <FaCapsules color="#8898aa" />
              Supplements
            </div>
            <button
              className="max-h-[50px] px-4 py-2 bg-black text-white rounded-lg mb-3"
              onClick={() => {
                console.log("LENG");
              }}
            >
              LENG
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-2 gap-3">
          {[
            { name: "Glow Essence Serum", price: "$39.99", oldPrice: "$60" },
            {
              name: "Silky Touch Foundation",
              price: "$29.99",
              oldPrice: "$45",
            },
            { name: "HydraLock Moisturizer", price: "$35.99", oldPrice: "$55" },
            { name: "Luxe Hair Repair Oil", price: "$24.99", oldPrice: "$40" },
            { name: "Velvet Matte Lipstick", price: "$19.99", oldPrice: "$30" },
            {
              name: "Radiance Face Cleanser",
              price: "$27.99",
              oldPrice: "$42",
            },
          ].map((product, index) => (
            <div
              key={index}
              href="#"
              class="group relative block overflow-hidden bg-gray-200 rounded-2xl h-fit cursor-pointer"
            >
              <button class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span class="sr-only">Wishlist</span>
                <MdFavoriteBorder />
              </button>

              <img src={pdtIMG} alt="" class=" w-full aspect-square" />

              <div class="relative border border-gray-100 bg-white p-3 m-2 rounded-xl">
                <h3 className="text-lg text-gray-900 font-semibold truncate">
                  {product.name}
                </h3>
                <p className="text-gray-700 lg:text-lg lg:font-bold font-semibold">
                  {product.price}&nbsp;
                  <span className="text-gray-400 line-through font-medium">
                    {product.oldPrice}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1 hidden lg:flex lg:flex-row w-full justify-evenly">
          <div className="flex flex-col m-5 w-full">
            <div className="flex container w-full justify-between items-center">
              <h2 className="text-xl font-semibold">REVIEWS</h2>
              <p>RATE</p>
            </div>
            <hr className="w-full text-gray-300 mt-5" />
            <div className="flex flex-col container w-full  items-center p-5">
              <div className="flex flex-row justify-between w-full">
                <p className="text-lg font-semibold text-gray-600">20,000</p>
                <p className="text-sm font-semibold text-gray-400">SAE</p>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-1">
                  <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                  <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                </div>
                <div className="rounded-2xl bg-gray-400 p-1 px-2">$2555</div>
              </div>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="flex flex-col container w-full  items-center p-5">
              <div className="flex flex-row justify-between w-full">
                <p className="text-lg font-semibold text-gray-600">20,000</p>
                <p className="text-sm font-semibold text-gray-400">SAE</p>
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex gap-1">
                  <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                  <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                </div>
                <div className="rounded-2xl bg-gray-400 p-1 px-2">$2555</div>
              </div>
            </div>
            <hr className="w-full text-gray-300" />
            <div className="flex flex-col container w-full justify-between my-5">
              <div className="flex justify-between items-center my-3">
                <h2 className="text-xl font-semibold">PEOPLE</h2>
                <GoArrowUpRight />
              </div>

              <p className="text-gray-500">
                - &nbsp;Lorem ipsum dolor sit amet .
              </p>
            </div>
            <div className="flex flex-col container w-full justify-between my-5">
              <div className="flex justify-between items-center my-3">
                <h2 className="text-xl font-semibold">COMMUNICATION</h2>
                <GoArrowUpRight />
              </div>

              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis in eum et harum. Excepturi quaerat cupiditate adipisci
                impedit aliquid.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-evenly lg:hidden md:hidden">
        <div className="">
          <h2 className="text-xl font-semibold my-5">CATAGORIES</h2>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold my-5">OTHERS</h2>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <div className="flex items-center my-3 gap-3 text-lg">
            <Fa500Px color="#8898aa" />
            Lorem
          </div>
          <button
            className="max-h-[50px] px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => {
              console.log("LENG");
            }}
          >
            LENG
          </button>
        </div>
      </div>

      <div className="md:col-span-1 hidden md:flex md:flex-row w-full justify-evenly lg:hidden mt-5">
        <div className="flex flex-col m-5 w-full justify-center items-center">
          <div className="flex container w-full justify-between items-center">
            <h2 className="text-xl font-semibold">REVIEWS</h2>
            <p>RATE</p>
          </div>
          <hr className="w-full text-gray-300 mt-5" />
          <div className="flex flex-col container w-full  items-center p-5">
            <div className="flex flex-row justify-between w-full">
              <p className="text-lg font-semibold text-gray-600">20,000</p>
              <p className="text-sm font-semibold text-gray-400">SAE</p>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex gap-1">
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
              </div>
              <div className="rounded-2xl bg-gray-400 p-1 px-2">$2555</div>
            </div>
          </div>
          <hr className="w-full text-gray-300" />
          <div className="flex flex-col container w-full  items-center p-5">
            <div className="flex flex-row justify-between w-full">
              <p className="text-lg font-semibold text-gray-600">20,000</p>
              <p className="text-sm font-semibold text-gray-400">SAE</p>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex gap-1">
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
              </div>
              <div className="rounded-2xl bg-gray-400 p-1 px-2">$2555</div>
            </div>
          </div>
          <hr className="w-full text-gray-300" />
          <div className="flex flex-col container w-full justify-between my-5">
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-semibold">PEOPLE</h2>
              <GoArrowUpRight />
            </div>

            <p className="text-gray-500">
              - &nbsp;Lorem ipsum dolor sit amet .
            </p>
          </div>
          <div className="flex flex-col container w-full justify-between my-5">
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-semibold">COMMUNICATION</h2>
              <GoArrowUpRight />
            </div>

            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              in eum et harum. Excepturi quaerat cupiditate adipisci impedit
              aliquid.
            </p>
          </div>
        </div>
      </div>

      <div className="md:col-span-1  flex md:flex-row w-full justify-evenly  md:hidden lg:hidden">
        <div className="flex flex-col m-5 w-full">
          <div className="flex container w-full justify-between items-center">
            <h2 className="text-xl font-semibold">REVIEWS</h2>
            <p>RATE</p>
          </div>
          <hr className="w-full text-gray-300  mt-5" />
          <div className="flex flex-col container w-full  items-center p-5">
            <div className="flex flex-row justify-between w-full">
              <p className="text-lg font-semibold text-gray-600">20,000</p>
              <p className="text-sm font-semibold text-gray-400">SAE</p>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex gap-1">
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
              </div>
              <div className="rounded-2xl bg-gray-500 p-1 px-2">$2555</div>
            </div>
          </div>
          <hr className="w-full text-gray-300" />
          <div className="flex flex-col container w-full  items-center p-5">
            <div className="flex flex-row justify-between w-full">
              <p className="text-lg font-semibold text-gray-600">20,000</p>
              <p className="text-sm font-semibold text-gray-400">SAE</p>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex gap-1">
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
                <img src={cusIMG} alt="" className="w-5 h-5 rounded-full" />
              </div>
              <div className="rounded-2xl bg-gray-400 p-1 px-2">$2555</div>
            </div>
          </div>
          <hr className="w-full text-gray-300" />
          <div className="flex flex-col container w-full justify-between my-5">
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-semibold">PEOPLE</h2>
              <GoArrowUpRight />
            </div>

            <p className="text-gray-500">
              - &nbsp;Lorem ipsum dolor sit amet .
            </p>
          </div>
          <div className="flex flex-col container w-full justify-between my-5">
            <div className="flex justify-between items-center my-3">
              <h2 className="text-xl font-semibold">COMMUNICATION</h2>
              <GoArrowUpRight />
            </div>

            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              in eum et harum. Excepturi quaerat cupiditate adipisci impedit
              aliquid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
