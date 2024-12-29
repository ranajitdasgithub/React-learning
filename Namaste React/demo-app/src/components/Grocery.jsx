import React from "react";
import ProductCard, { withPromotedLabel } from "./ProductCard";

const Grocery = () => {
  const PromotedCard = withPromotedLabel(ProductCard); //HOC
  const products = [
    {
      id: 1,
      name: "Apple",
      price: 1.2,
      promoted: false,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Banana",
      price: 0.5,
      promoted: true,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Carrot",
      price: 0.8,
      promoted: true,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Tomato",
      price: 1.5,
      promoted: false,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) =>
        product.promoted ? (
          <PromotedCard key={product.id} product={product} />
        ) : (
          <ProductCard key={product.id} product={product} />
        )
      )}
    </div>
  );
};

export default Grocery;
