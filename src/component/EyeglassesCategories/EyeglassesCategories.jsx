import React from "react";

import menGlass1 from "../../assets/img/Glass1.png";
import menGlass2 from "../../assets/img/men2.png";
import menGlass3 from "../../assets/img/men3.png";

import main from "../../assets/img/Main.png";
import main1 from "../../assets/img/main1.png";
import main2 from "../../assets/img/main2.png";

const categories = [
  {
    title: "Men",
    glasses: [menGlass1, menGlass2, menGlass3],
  },
  {
    title: "Women",
    glasses: [menGlass1, menGlass2, menGlass1],
  },
  {
    title: "Baby",
    glasses: [menGlass2, menGlass3, menGlass1],
  },
  {
    title: "Young Fashion",
    glasses: [menGlass2, menGlass1, menGlass3],
  },
];

export default function EyeglassesCategories() {
  return (
    <div className="p-6   ">
      <h1 className="text-3xl font-bold text-center mb-8">
        Eyeglasses Categories
      </h1>
      <div className=" container mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow p-4">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Eyeglasses
          </h2>
          <div className="space-y-4">
            <img src={main} alt="Main Glasses" className="rounded-xl w-full" />
            <div className="flex justify-center gap-4">
              <img src={main1} alt="Thumb1" className="rounded-xl" />
              <img src={main2} alt="Thumb2" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full md:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-4 shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex justify-center gap-5 overflow-auto">
                {category.glasses.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${category.title} ${index + 1}`}
                    className="w-20 md:w-32 md:h-28 object-contain rounded "
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
