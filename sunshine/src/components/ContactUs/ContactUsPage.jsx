import React from "react";
import bgContactUs from "./bgContactUs.svg";
import telephone from "./telephone.svg";
import email from "./email.svg";
import location from "./location.png";

export default function ContactUsPage() {
  return (
    <>
      <div
        className="w-full h-96  lg:h-[400px]  "
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
          <div className="   lg:text-[50px] text-[40px]  z-10 text-white font-[750] leading-8 ">
            Contact Us
          </div>
          <div className=" font-normal  z-10   text-[18px] lg:text-[30px] mt-8 capitalize text-[#d6d6d6]">
            For any queries feel free to contact us
          </div>
        </div>
        <div className="w-full h-full "></div>
      </div>
      <div className="w-full h-full py-10 my-2 bg-white lg:my-10 ">
        <div className="flex flex-wrap items-center justify-around w-full h-full gap-10 lg:flex-nowrap">
          <div className="flex items-center justify-center w-full h-full ">
            <div className=" w-full m-2  lg:w-[70%]  h-full  rounded-lg  bg-[#27005D]">
              <div className="w-full h-full mt-3 pl-14">
                <div className=" text-white leading-10 pt-10 font-semibold text-[23px]">
                  Contact Information
                </div>
                <div className=" text-[16px] text-white ">
                  Contact us to get martial arts consultation
                </div>
                <div className="flex flex-col justify-center w-full h-full gap-10 my-28 ">
                  <div className="flex items-center ">
                    <div className="pr-8 ">
                      <img width={27} src={telephone} alt="" />
                    </div>
                    <div className=" text-[16px] flex-wrap  text-white flex ">
                      <a
                        className=" text-[18px] z-20  pr-4  font-semibold "
                        href="tel:7598749731"
                      >
                        +91 75987 49731
                      </a>
                      ,
                      <a
                        className=" text-[18px] z-30 font-semibold  pl-0  lg:pl-4 "
                        href="tel:9486000674"
                      >
                        +91 94860 00674
                      </a>
                    </div>
                  </div>{" "}
                  <div className="flex items-center ">
                    <div className="pr-8 ">
                      <img width={27} src={email} alt="" />
                    </div>
                    <div className=" text-[16px] text-white flex ">
                      SSBKD@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center mr-16 lg:items-start ">
                    <div className="pr-8">
                      <img width={70} src={location} alt="" />
                    </div>
                    <div className=" text-[16px]    text-white flex ">
                      <div className="">
   Near St.Alphonsa College of Arts and Science, Soosaipuram,
                      Karinkal, Kanyakumari District, Tamil Nadu, India
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <div className="  w-full lg:w-[70%] h-[400px] rounded-lg  m-2  p-4 bg-[#27005D]">
              <div className="z-30 w-full h-full ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8010332547183!2d77.24197319999999!3d8.222754100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04fe580b4ec7e9%3A0xd943e04661388f06!2sSt.%20Alphonsa%20College%20of%20Arts%20%26%20Science!5e0!3m2!1sen!2sin!4v1694584965524!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
