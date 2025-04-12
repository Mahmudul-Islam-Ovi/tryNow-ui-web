import Glass1 from "../../assets/img/prodectspic.png";

const baseProduct = {
  image: Glass1,
  name: "Sample Eyeglasses",
  inStock: true,
  rating: 4.5,
  reviews: 12,
  originalPrice: 9.99,
  salePrice: 7.22,
  discount: 20,
};

export default {
  flashSale: [
    { ...baseProduct, name: "Gucci Eyeglasses", discount: 15 },
    { ...baseProduct, name: "Police Eyeglasses", discount: 20, inStock: false },
    { ...baseProduct, name: "Polo Eyeglasses", discount: 15 },
    { ...baseProduct, name: "Ray Ban Eyeglasses", discount: 30 },
  ],
  all: [
    { ...baseProduct, name: "Stetson Eyeglasses", inStock: false },
    { ...baseProduct, name: "Sperry Eyeglasses", rating: 5, reviews: 12 },
    { ...baseProduct, name: "Tura Eyeglasses", salePrice: 8.52 },
    { ...baseProduct, name: "Maclon Eyeglasses", discount: 30 },
  ],
  bestSelling: [
    { ...baseProduct, name: "Vogue Eyeglasses" },
    { ...baseProduct, name: "Xoxo Eyeglasses", inStock: false },
    { ...baseProduct, name: "Versace Eyeglasses", reviews: 44 },
    { ...baseProduct, name: "Radley Eyeglasses", salePrice: 606.52 },
  ],
  discounted: [
    { ...baseProduct, name: "Spy Eyeglasses", inStock: false },
    { ...baseProduct, name: "Kensie Eyeglasses", reviews: "12 Reviews" },
    { ...baseProduct, name: "Jaguar Eyeglasses" },
    { ...baseProduct, name: "Hello Kitty Eyeglasses", discount: 30 },
  ],
  newArrival: [
    { ...baseProduct, name: "Modo Eyeglasses", discount: 30 },
    { ...baseProduct, name: "Lafont Eyeglasses", salePrice: 8.52 },
    { ...baseProduct, name: "Line Art Eyeglasses" },
    {
      ...baseProduct,
      name: "Lucky Barand Eyeglasses",
      inStock: false,
      salePrice: 606.52,
    },
  ],
};
