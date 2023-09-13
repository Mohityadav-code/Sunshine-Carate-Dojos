import React from "react";
import Contact from "./Contact";
import facebook from "./facebook 1.svg"
import twitter from "./twitter.svg"
import instagram from "./instagram.svg"
import linkedin from "./linkedin.svg"

// import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Footer() {
  return (
    <>
      <div className="w-full absolute   -left-0 bg-[#000] h-auto">
        <div className="container flex flex-wrap w-full h-full mt-10 ml- lg:px-16 px-7 lg:flex-nowrap ">
          <div className="flex flex-col justify-between w-full h-full mt-10 lg:mt-0">
            <div className="text-3xl pl-3 mb-4 text-[#fff]   tracking-widest">
              Our Clubs
            </div>
            <div className="w-full h-full ml-8 contact ">
              <div className="flex flex-col justify-around w-full h-full ">
                <div className="flex items-center py-4">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                    CHEMMANKALAI DOJO{" "}
                  </p>
                </div>
                <div className="flex items-center py-4">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                  MULUCODE DOJO
                  </p>
                </div>
                <div className="flex items-center py-4">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                  PADANTALUMOOD DOJO
                  </p>
                </div>
                <div className="flex items-center py-4">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                  KONACHERI DOJO
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Contact />
          <div className="flex items-center justify-center w-full gap-10 my-5 lg:w-auto lg:items-end lg:ml-0 "> 
          <img width={30} src={facebook} alt="" />
          <img width={30} src={twitter} alt="" />
          <img width={30} src={instagram} alt="" />
          <img width={30} src={linkedin} alt="" />

          </div>
        </div>
        <div className="flex items-center justify-center w-full py-3 bg-red-600 ">
          <div className=" justify-center items-center h-full text-white text-[15px]">
            © 2021 All Rights Reserved. Designed by
            <span className="text-[#bbbbbb] text-[15px] pl-2 font-semibold">
              TechHive
            </span>
          </div>
        </div>
      </div>
      {/* <FloatingWhatsApp
        showPopup={false}
        phoneNumber="+918925799512"
        accountName="Techhive Technology"
        statusMessage="Available"
        avatar="https://www.techhive.co.in/img/logo.png"
      /> */}
    </>
  );
}
