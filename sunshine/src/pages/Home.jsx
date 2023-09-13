import React from "react";
import ClubsLayout from "../components/ClubsLayout";
import GalleryLayout from "../components/GalleryLayout";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import IconsLayout from "../components/IconsLayout";

export default function Home() {
  return (
    <div>
    
      <div className=" bg-[#ffffff]">
        <p class="text-[#D2001A] text-center font-sans text-[48px]  font-[700] leading-normal">
          Sunshine Budokan Karate Dojos
        </p>
        <p class="text-[#040404] text-center font-sans text-[24px]  font-[700] leading-normal">
          Affiliated with KBI - Australia
        </p>
      </div>  <Banner/>
      <AboutUs/>
      <ClubsLayout/>
      <div className="w-full h-full ">

      <GalleryLayout/>
      </div>
      <IconsLayout/>
    
    </div>
  );
}
