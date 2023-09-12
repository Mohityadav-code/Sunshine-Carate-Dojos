import React from "react";
import bgContactUs from "./bgContactUs.svg";

export default function ContactUsPage() {
  return (
    <>
      <div
        className="w-full h-[400px]  "
        style={{
          backgroundImage: `url(${bgContactUs})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="z-30 flex flex-col items-center justify-center w-full h-full ">
          <div className=" text-[50px]  z-10 text-white font-[750] leading-8 ">
            Contact Us
          </div>
          <div className=" font-normal  z-10  text-[30px] mt-8 capitalize text-[#d6d6d6]">
            For any queries feel free to contact us
          </div>
        </div>
        <div className="w-full h-full "></div>
      </div>
      <div className="w-full h-full py-10 my-10 bg-white ">
        <div className="flex flex-wrap items-center justify-around w-full h-full gap-5 lg:flex-nowrap">
        <div className="flex items-center justify-center w-full h-full ">
            <div className=" w-[70%] h-full    bg-[#27005D]">
              <div className="w-full h-full pl-8 ">
                <div className=" text-white leading-10 pt-10 font-semibold text-[23px]">
                    Contact Information 
                </div>
                <div className=" text-[16px] text-white ">
                Contact us to get martial arts consultation
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <div className=" w-[70%] h-full   p-4 bg-[#27005D]">
              <div className="w-full h-full "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
