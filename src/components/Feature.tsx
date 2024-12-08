import React from "react";
import Image from "next/image";

const FeaturePage = () => {
  return (
    <div className="w-[1920px] ">
      <div>
        <h1 className="font-bold">Featured Products</h1>
        <div className="flex justify-normal gap-2 w-[1920px]">
          {/* 1270px */}
          <div>
            <Image
              src="images\Products.svg"
              alt="pro.1"
              width={312}
              height={377}
            ></Image>
          </div>
          <div>
            <Image
              src="images\Products (1).svg"
              alt="pro.2"
              width={312}
              height={377}
            ></Image>
          </div>
          <div>
            <Image
              src="images\Products (2).svg"
              alt="pro.3"
              width={312}
              height={377}
            ></Image>
          </div>
          <div>
            <Image
              src="images\Products (3).svg"
              alt="pro.4"
              width={312}
              height={377}
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-[2216px] px-[-148px]">
        <Image
          src="images\Top Categotires.svg"
          alt="top.svg"
          width={1000}
          height={508}
        ></Image>
      </div>
    </div>
  );
};

export default FeaturePage;
