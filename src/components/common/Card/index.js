import React from "react";
import Image from "next/image";
import ImageProduct from "../../../../public/images/product.png";

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
        <Image className="mb-4" src={ImageProduct} />
        <h5 className="font-proximanova text-dark-blue text-lg leading-tight font-semibold">
          {item.name}
        </h5>
        <p className="font-semibold text-sm text-orange">{price(item.price)}</p>
      </div>
    </div>
  );
};

export default Card;
