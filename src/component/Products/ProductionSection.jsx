import React from "react";
import ProductCard from "./ProductCard";

export default function ProductSection({ title, products }) {
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center my-10 border-gray-300 pb-2">
        {title}
      </h2>
      <div className="flex md:p-0 p-20 gap-10 overflow-x-auto">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
