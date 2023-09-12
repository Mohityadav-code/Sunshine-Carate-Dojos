import React from "react";
import banner from "./banner.svg";
import seelan from "./seelan.svg";
import sujin from "./sujin.svg";
import Section from "../../layout/Section";

export default function AboutUsPage() {
  return (
    <>
      <div
        className="w-full h-[500px] "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60">
          <div className="flex flex-col items-start justify-center w-full h-full gap-10 pl-20 ">
            <div className=" text-[55px]  text-white font-[750] leading-8 ">
              SSBKD
            </div>
            <div className=" font-normal   text-[35px] capitalize text-[#d6d6d6]">
              Where Warriors Rise!
            </div>
            <div className="  font-semibold  text-[20px] flex  gap-10  capitalize text-[#fff]">
              <div>500+ Warriors</div>
              <div>25+ Trainers</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full ">

        </div>
        <Section
          title="OUR FOUNDERS"
          bg={"bg-[#F8F9F9"}
          children={
            <>
              <div className="flex items-center justify-around w-full h-auto gap-10 mt-14 ">
                <div className="flex-col items-center justify-center w-full h-full gap-3 mb-20">
                    <div className="flex items-center justify-center w-full ">
                          <img width={400} src={seelan} alt="" />
                        </div>
                  <div className=" my-  text-[25px] font-bold text-center text-[#FF0303]">
                    Shihan.A.P.Seelan
                  </div>
                  <div className=" font-[800] text-[20px]  text-center text-black text-md">
                    Black Belt VI Dan
                  </div>
                  <div className=" font-[800] text-[20px]  text-center text-black text-md">
                    Zonal Chief Instructor - KBI
                  </div>
                </div>
                <div className="flex-col items-center justify-center w-full h-full gap-3 mb-20 ">
                    <div className="flex items-center justify-center w-full h-full">

                  <img width={400} src={sujin} alt="" />
                    </div>
                  <div className="text-[25px] font-bold my- text-center text-[#FF0303]">
                    Shihan.V.Sujin
                  </div>
                  <div className=" font-[800] text-[20px]  text-center text-black text-md">
                    Black Belt VI Dan
                  </div>
                  <div className=" font-[800] text-[20px]  text-center text-black text-md">
                    Zonal Chief Instructor - KBI
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
