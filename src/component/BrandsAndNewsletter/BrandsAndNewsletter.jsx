import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { BiDollar } from "react-icons/bi";

import Police from "../../assets/img/police.png";
import RayBan from "../../assets/img/rayban.png";
import Gucci from "../../assets/img/gucci.png";
import Boss from "../../assets/img/boss.png";
import Carrera from "../../assets/img/careia.png";
import Brand from "../../assets/img/rand.png";

const brandLogos = [Police, RayBan, Gucci, Boss, Carrera, Brand];

export default function BrandsAndNewsletter() {
  return (
    <div className="py-10 container mx-auto  text-center">
      {/* Top Brands */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-20 ">
        <span className="">Top Brands</span>
      </h2>
      <div className="flex flex-wrap justify-between p-10 gap-10">
        {brandLogos.map((logo, i) => (
          <img key={i} src={logo} alt={`Brand ${i}`} className="h-8 " />
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-black text-white py-8 px-6 mt-12 rounded-full flex flex-col md:flex-row items-center justify-between gap-6  mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold">
          Join Our Newsletter
        </h3>
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none px-2 py-1 w-full md:w-64 text-black bg-transparent"
          />
          <button className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 flex justify-between  flex-wrap px-10  gap-3 text-sm text-gray-800">
        <div className="flex items-center justify-center gap-2">
          <FaShippingFast className="text-xl" />
          <span>Free delivery for order over $70</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <GiGearHammer className="text-xl" />
          <span>Daily Mega Discounts</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BiDollar className="text-xl" />
          <span>Best price on the market</span>
        </div>
      </div>
    </div>
  );
}
