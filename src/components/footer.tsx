import React from "react";
import Image from "next/image";


const Footer = () => {
  return (
    <div>
      <div className="flex gap-2 w-[1920px] h-[343px] py-10 px-10">
        <div>
          <Image
            src="images\Chairy.svg"
            alt="footer.svg"
            width={350}
            height={198}
          ></Image>
        </div>
        <div>
          <Image
            src="images\Frame 10.svg"
            alt="footer1.svg"
            width={105}
            height={203}
          ></Image>
        </div>
        <div>
          <Image
            src="images\Frame 11.svg"
            alt="footer2.svg"
            width={156}
            height={143}
          ></Image>
        </div>
        <div>
          <Image
            src="images\Newsletter.svg"
            alt="footer3.svg"
            width={156}
            height={143}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Footer;
