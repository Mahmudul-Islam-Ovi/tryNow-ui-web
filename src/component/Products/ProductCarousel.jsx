import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-500 hover:text-white"
  >
    <MdArrowForwardIos />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-blue-500 hover:text-white"
  >
    <IoIosArrowBack />
  </button>
);

export default function ProductCarousel({ title, products }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative md:p-0 p-10 mb-10">
      <h2 className="text-4xl font-bold text-center my-5  border-gray-300 pb-2">
        {title}
      </h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <div className="bg-white border border-gray-300 rounded-xl p-4 relative w-full h-full">
              {product.discount && (
                <div className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded-md">
                  {product.discount}% OFF
                </div>
              )}
              <div className="w-full p-5 h-80 bg-gray-100 flex items-center justify-center rounded-t-full mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain "
                />
              </div>
              <h4 className="font-semibold text-sm">{product.name}</h4>
              <p
                className={`text-xs ${
                  product.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
              <div className="flex items-center text-xs text-blue-500 mt-1">
                ★ {product.rating}
                {product.reviews && (
                  <span className="ml-1 text-gray-400">
                    / {product.reviews} Reviews
                  </span>
                )}
              </div>
              <div className="text-sm mt-2">
                <span className="line-through text-gray-400">
                  ${product.originalPrice}
                </span>{" "}
                <span className="text-blue-600 font-bold">
                  ${product.salePrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
