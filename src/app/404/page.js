"use client";
import { FaSadTear } from "react-icons/fa";

export default function ErrorNotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-gilroybold font-extrabold text-dark-blue text-8xl">
      <FaSadTear color="#002060" size={100} />
      <div className="mt-4 text-center">
        <h1 className=" ">404</h1>
        <p className="text-base text-gray-600">Page not found</p>
      </div>
    </div>
  );
}
