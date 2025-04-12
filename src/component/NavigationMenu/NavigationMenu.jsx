// components/NavigationMenu.jsx
import { useState } from "react";
import { FaChevronDown, FaApple } from "react-icons/fa";

const brands = ["Ray-Ban", "Oakley", "Gucci", "Prada", "Versace", "Tom Ford"];

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Categories by Brand");

  const handleSelect = (brand) => {
    setSelected(brand);
    setOpen(false);
  };
  return (
    <div className="bg-[#f8fdff] py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Left: Category Dropdown Button */}
        <div className="relative inline-block text-left ">
          <button
            onClick={() => setOpen(!open)}
            className="bg-black text-white w-[250px] px-5 py-5 rounded-lg flex items-center space-x-2 text-xl  focus:outline-none"
          >
            <span>{selected}</span>
            <FaChevronDown size={12} />
          </button>

          {open && (
            <ul className="absolute z-50 mt-2 w-48 bg-white shadow-lg rounded-md text-gray-800 text-xl">
              {brands.map((brand) => (
                <li
                  key={brand}
                  onClick={() => handleSelect(brand)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Center Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-xl  text-gray-800">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Home</span>
            <FaChevronDown size={10} />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Shop</span>
            <FaChevronDown size={10} />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Eyeglasses</span>
            <FaChevronDown size={10} />
          </div>
          <div className="cursor-pointer">About Us</div>
        </nav>

        <button className="bg-black text-white px-16 py-4 md:mt-0  mt-5 rounded-bl-full  rounded-tr-full flex items-center space-x-2 text-3xl">
          <FaApple />
          <div className="text-left">
            <div className="text-[15px] leading-tight">
              Get 50% off on the App
            </div>
            <div className="font-semibold text-[18px]">Download Now</div>
          </div>
        </button>
      </div>
    </div>
  );
}
