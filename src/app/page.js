"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/common/Banner";
import Card from "@/components/common/Card";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window
      .fetch("./api/product")
      .then((response) => response.json())
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <h1 className="w-full text-center my-8 text-dark-blue font-gilroybold text-xl">
        Product List
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {products
          ? products.map((item) => {
              return <Card item={item} key={item.id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
