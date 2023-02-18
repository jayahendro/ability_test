import React from "react";
import Image from "next/image";

import icSolusi from "../../../../public/images/solusi.png";
import bgBanner from "../../../../public/images/bg-banner.png";

const Banner = () => {
  return (
    <div className="w-full flex flex-row justify-center py-10 bg-banner-image bg-cover">
      <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 flex flex-col justify-center">
        <div className="font-gilroy text-dark-blue">
          <span className="font-bold">Solusi, </span>
          <span className="font-gilroybold">Kesehatan Anda</span>
        </div>
        <div className="font-proximanova text-blue">
          Update informasi seputar kesehatan semua bisa disini !
        </div>
        <div className="flex space-x-2 text-white font-gilroy font-semibold mt-4 hover:opacity-80">
          <button className="bg-dark-blue rounded-md px-4 py-2">
            Selengkapnya
          </button>
        </div>
      </div>
      <div>
        <Image src={icSolusi} alt="solusi" />
      </div>
    </div>
  );
};

export default Banner;
