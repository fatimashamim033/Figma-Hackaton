import React from "react";
import Image from "next/image";

const Copyright = () => {
  return (
    <div className="w-[1920] h-[75]">
      
      <Image
        src="images/Frame 69.svg"
        alt="footer4.svg"
        width={1920}
        height={75}
      ></Image>
      <div>
       <p>Name: Fatima Shamim</p>
      <p>Roll no: 00357088 </p>
      <p>Day: Thursday Morning(9.00 to 12.00)</p> 
      </div>
    </div>
  );
};

export default Copyright;
