import React from "react";

import FlashSaleTimer from "./FlashSaleTimer";
import productData from "./ProductData";
import ProductSection from "./ProductionSection";
import ProductCarousel from "./ProductCarousel";
const Products = () => {
  return (
    <div className="">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-4">Flash Sale</h1>
        <FlashSaleTimer />
        <ProductCarousel products={productData.flashSale} />
        <ProductCarousel title="All Product" products={productData.all} />
        <ProductCarousel
          title="Best Selling"
          products={productData.bestSelling}
        />
        <ProductCarousel
          title="Discounted Offer"
          products={productData.discounted}
        />
        <ProductCarousel
          title="New Arrival"
          products={productData.newArrival}
        />
      </div>
    </div>
  );
};

export default Products;
