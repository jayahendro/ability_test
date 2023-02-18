import React from "react";
import Image from "next/image";

const Card = ({ item }) => {
  const price = (text) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(parseInt(text));
  };
  return (
    <div key={item.id} className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {item.name}
        </h5>
        <p className="text-gray-700 text-base mb-4">{price(item.price)}</p>
      </div>
    </div>
  );
};

export default Card;
