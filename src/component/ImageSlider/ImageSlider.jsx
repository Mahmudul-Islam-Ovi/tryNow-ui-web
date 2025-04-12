import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import sliderImage from "../../assets/img/slider img.png";

const slides = [
  {
    title: "New Fashion & Modern Eyeglasses",
    subtitle: "Coming Soon April",
    image: sliderImage, // Replace with your image URL
    button: "Discover Models",
  },
  {
    title: "Explore Premium Frames",
    subtitle: "Only This Month",
    image: sliderImage,
    button: "Shop Now",
  },
  {
    title: "Bold Looks, Better Vision",
    subtitle: "Limited Edition",
    image: sliderImage,
    button: "Check It Out",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-black hover:text-white"
  >
    <MdArrowForwardIos />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-black hover:text-white"
  >
    <MdArrowBackIosNew />
  </button>
);

export default function ImageSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-blue-50 py-10 px-4 md:px-16">
      <div className="relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10 bg-blue-50 "
            >
              <div className="flex-1 text-center md:text-left">
                <p className="text-blue-500 font-medium mb-2">
                  {slide.subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h2>
                <button className="mt-6 px-6 py-2 cursor-pointer bg-black text-white rounded-full hover:bg-blue-600 transition text-sm">
                  {slide.button}
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-64 object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
