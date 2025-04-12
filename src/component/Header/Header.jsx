// components/Header.jsx
import { useState } from "react";
import Fuse from "fuse.js";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import logo from "../../assets/img/Logo.png"; // Assuming you have a logo image

const products = [
  { name: "Sunglasses" },
  { name: "Blue Light Glasses" },
  { name: "Reading Glasses" },
  { name: "Contact Lenses" },
  { name: "Eye Drops" },
];

const fuse = new Fuse(products, {
  keys: ["name"],
  threshold: 0.3,
});

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setResults(value ? fuse.search(value).map((res) => res.item.name) : []);
  };

  return (
    <div className="bg-[#f8fdff] py-4">
      <div className="container mx-auto mt-5 flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Logo */}
        <img src={logo} alt="logo" srcset="" />

        {/* Search Bar */}
        <div className="flex w-full md:w-1/2 relative">
          <select className="bg-black text-white px-4  rounded-l-md text-lg">
            <option>All Categories</option>
            <option>Eyewear</option>
            <option>Accessories</option>
            <option>Accessories 2</option>
            <option>Accessories 3</option>
            <option>Accessories 5</option>
          </select>
          <input
            type="text"
            className="w-full px-5 py-3 bg-gray-100 text-lg focus:outline-none"
            placeholder="Search for products"
            value={query}
            onChange={handleSearch}
          />
          <button className="bg-black text-white px-4 rounded-r-md">
            <FaSearch />
          </button>

          {/* Search Suggestions */}
          {results.length > 0 && (
            <ul className="absolute z-10 top-full mt-1 w-full bg-white border rounded shadow">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => {
                    setQuery(item);
                    setResults([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-2xl">
          <div className="relative cursor-pointer">
            <FaUser />
          </div>
          <div className="relative cursor-pointer">
            <FaHeart />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>
          <div className="relative cursor-pointer">
            <FaShoppingBag />
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
