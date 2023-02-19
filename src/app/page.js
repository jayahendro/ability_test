"use client";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/common/Navbar";
import Banner from "@/components/common/Banner";
import Card from "@/components/common/Card";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch("./api/product");
    const json = await response.json();
    setData(json);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="md:h-screen">
      <Navbar />
      <Banner />
      <h1 className="w-full text-center my-8 text-dark-blue font-gilroybold text-xl">
        Product List
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
