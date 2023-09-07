import React from "react";
import Contact from "./Contact";

// import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Footer() {
  return (
    <>
      <div className="w-full absolute   -left-0 bg-[#000] h-auto">
        <div className="container  ml-  mt-10  lg:px-16 px-7  w-full h-full flex-wrap lg:flex-nowrap   flex ">
          <div className="flex mt-10 lg:mt-0  justify-between  flex-col w-full h-full">
            <div className="text-3xl pl-3 mb-4 text-[#fff]   tracking-widest">
              Our Clubs
            </div>
            <div className="contact    w-full h-full ">
              <div className="flex flex-col  justify-around   w-full  h-full ">
                <div className="flex py-4   items-center">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                    CHEMMANKALAI DOJO{" "}
                  </p>
                </div>
                <div className="flex py-4  items-center">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                  MULUCODE DOJO
                  </p>
                </div>
                <div className="flex py-4  items-center">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                  PADANTALUMOOD DOJO
                  </p>
                </div>
                <div className="flex py-4  items-center">
                  <p className="text-[#fff]  pl-2  text-[17px] font-sans">
                  KONACHERI DOJO
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Contact />
        </div>
        <div className="w-full bg-red-600  flex justify-center items-center   py-3 ">
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
