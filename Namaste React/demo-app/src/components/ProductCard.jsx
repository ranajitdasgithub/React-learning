import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={product?.image} alt={product?.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product?.name}</div>
        <p className="text-gray-700 text-base">${product?.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

//HOC - Higher Order Component, add the Promoted label in the Product card component
export const withPromotedLabel = (ProductCard) => {
  return (product) => {
    return (
      <div className="relative">
        <span className="absolute text-cyan-400 bg-slate-400 rounded-md top-[25px] left-3">
          Best Seller
        </span>
        <ProductCard {...product} />
      </div>
    );
  };
};
