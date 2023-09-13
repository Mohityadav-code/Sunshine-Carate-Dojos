import React from "react";
import icon1 from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import icon5 from "./icon5.svg";

export default function IconsLayout() {
  //   Founder
  // Grand Master
  // World Chief
  // Asian Chief
  // Asian Chief
  // Chew Choo Soot
  // Richard L T Chew
  // Wayne Mac Donald
  // B Paramesh
  // K Mahesh Babu
  const arr = [
    { name: "Founder", img: icon5, text: "Chew Choo Soot" },
    { name: "Grand Master", img: icon1, text: "Richard L T Chew" },
    { name: "World Chief", img: icon2, text: "Wayne Mac Donald" },
    { name: "Asian Chief", img: icon3, text: "B Paramesh" },
    { name: "Asian Chief", img: icon4, text: "K Mahesh Babu" },
  ];
  return (
    <div className=" w-full h-full pb-10 bg-[#F8F9F9]">
      <div className="text-5xl py-5 mt-5 underline underline-offset-4 text-center font-sans font-black text-[#222831] w-full">
        ICONS OF KBI
      </div>
      <div className="flex flex-wrap items-center justify-around w-full h-auto p-10 mt-5 lg:flex-nowrap lg:gap-44 lg:mt-14 ">
        {arr.map((item, index) => {
          return (
            <div className="flex-col items-center justify-center w-full h-full gap-3 mb-20">
              <div className="flex items-center justify-center w-full mt-10 shadow-lg ">
                <img
                  className=" lg:w-[400px] w-[320px]"
                  src={item.img}
                  alt=""
                />
              </div>

              <div className=" font-[700] text-[18px] mt-3  text-center text-black text-md">
                {item.name}
              </div>
              <div className=" my-  text-[19px] font-bold text-center text-[#FF0303]">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-around w-full h-full gap-4 ">
        <div className="  justify-center items-center flex  w-[400px] h-full py-10 ">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPJWoiRGwO7x0kPvmnxJhsjFc5BfqEzp-z4BJNs=w600-h0"
            className=""
            alt=""
          />
        </div>
        <div className="  justify-center items-center flex  w-[400px] h-full py-10">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOtMFD03EErdTiehHZn9ZGHmUsLH6rIf2rrLcFe=w600-h0"
            className=""
            alt=""
          />
        </div>
        <div className="  justify-center items-center flex  w-[400px] h-full py-10">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipO-VguPUOU1XFR_lKNIIOc6UB-n0Q_-rGaut2sh=w600-h0"
            className=""
            alt=""
          />
        </div>
        {/* <div className="  justify-center items-center flex  w-[400px] h-full py-10">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipO-VguPUOU1XFR_lKNIIOc6UB-n0Q_-rGaut2sh=w600-h0"
            className=""
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
