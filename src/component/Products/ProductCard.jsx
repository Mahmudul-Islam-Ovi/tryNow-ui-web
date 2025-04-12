import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 relative w-full ">
      {product.discount && (
        <div className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded-md">
          {product.discount}% OFF
        </div>
      )}
      <div className="w-full p-5 h-80  bg-gray-300 flex items-center justify-center rounded-t-full mb-4">
        <img
          src={product.image}
          alt={product.name}
          className=" object-contain"
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
        ★ {product.rating}{" "}
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
        <span className="text-blue-600 font-bold">${product.salePrice}</span>
      </div>
    </div>
  );
}
