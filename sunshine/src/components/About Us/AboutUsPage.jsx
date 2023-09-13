import React from "react";
import banner from "./banner.svg";
import seelan from "./seelan.svg";
import sujin from "./sujin.svg";
import image1 from "./1.svg";
import image2 from "./2.svg";
import image3 from "./3.svg";

import Section from "../../layout/Section";

export default function AboutUsPage() {
  const arr = [
    " Welcome to Sunshine Budokan Karate Dojos, your starting point for self-improvement and martial mastery, rooted in karate's core values.",
    "Our dojo isn't just about martial arts; it's a character-building journey. We offer top-tier martial arts training that enhances physical fitness, self-defense skills, and personal growth. As the dojo's founder, I've devoted my life to karate's philosophy, witnessing its transformative power in our students. Through rigorous training, they develop mental resilience, face life's challenges head-on, and build lasting bonds within our supportive community.",
    "Sunshine Budokan Karate Dojos isn't just a place to learn karate; it's where you'll unearth your inner strength, embrace personal growth, and embark on a journey towards your best self. Explore our programs on our website, and most importantly, visit our dojo to experience the profound impact of martial arts firsthand.",
    "Thank you for considering Sunshine Budokan Karate Dojos as your martial arts home. We eagerly await the opportunity to guide you toward excellence, both on and off the dojo floor.",
  ];
  const arr2 = [
    { img: image1, title: "Self Defence training" },
    { img: image3, title: "fitness and flexibility " },
    { img: image2, title: "martial arts competition" },
  ];
  return (
    <>
      <div
        className="w-full  h-[250px] lg:h-[500px]  "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60">
        </div>
          <div className="z-30 flex flex-col items-start justify-center w-full h-full pl-10 md:pl-20 lg:pl-40 ">
            <div className="    text-[45px] lg:text-[55px]  z-10 text-white font-[750] leading-8 ">
              SSBKD
            </div>
            <div className=" font-normal  z-10   text-[25px]  lg:text-[35px] mt-10 capitalize text-[#d6d6d6]">
              Where Warriors Rise!
            </div>
            <div className="  font-semibold  z-10 text-[20px] flex-wrap flex  gap-2    capitalize text-[#fff]">
              <div className="pr-10 ">500+ Warriors</div>
              <div>25+ Trainers</div>
            </div>
          </div>
        <div className="w-full h-full "></div>
      </div>
      <Section
        title="OUR FOUNDERS"
        bg={"bg-[#F8F9F9"}
        children={
          <>
            <div className="flex flex-wrap items-center justify-around w-full h-auto gap-10 mt-5 lg:flex-nowrap lg:gap-44 lg:mt-14 ">
              <div className="flex-col items-center justify-center w-full h-full gap-3 mb-20">
                <div className="flex items-center justify-center w-full mt-10 ">
                  <img className=" lg:w-[350px] w-[320px]"  src={seelan} alt="" />
                </div>
                <div className=" my-  text-[23px] font-bold text-center text-[#FF0303]">
                  Shihan.A.P.Seelan
                </div>
                <div className=" font-[800] text-[18px]  text-center text-black text-md">
                  Black Belt VI Dan
                </div>
                <div className=" font-[800] text-[18px]  text-center text-black text-md">
                  Zonal Chief Instructor - KBI
                </div>
              </div>
              <div className="flex-col items-center justify-center w-full h-full gap-3 mb-20 ">
                <div className="flex items-center justify-center w-full h-full mt-10">
                  <img className=" lg:w-[350px] w-[320px]"   src={sujin} alt="" />
                </div>
                <div className="text-[23px] font-bold my- text-center text-[#FF0303]">
                  Shihan.V.Sujin
                </div>
                <div className=" font-[800] text-[18px]  text-center text-black text-md">
                  Black Belt VI Dan
                </div>
                <div className=" font-[800] text-[18px]  text-center text-black text-md">
                  Zonal Chief Instructor - KBI
                </div>
              </div>
            </div>
          </>
        }
      />
      <Section
        bg={"bg-[#fff]"}
        children={
          <>
            <div className="px-2 mb-20 ml-4 lg:ml-20 lg:px-20">
              <div className="flex w-full h-auto ">
                <div className=" font-[800] text-start text-[#222831] text-[25px]">
                  Founders Message
                </div>
              </div>
              <div className="my-8 "></div>
              {arr.map((item) => {
                return (
                  <div className="flex my-5 text-justify py-1 items-center justify-start pr-2  lg:pr-20  font-[500] leading-10 text-black  text-[18px]">
                    {item}
                  </div>
                );
              })}
            </div>
          </>
        }
      />

      <Section
        bg={"bg-[#F8F9F9]"}
        title={"What we do?"}
        children={
          <>
            <div className="w-full h-full mt-10 mb-20 ">
              <div className="flex flex-wrap items-center justify-around w-full h-full gap-10 lg:flex-nowrap ">
                {arr2.map((item) => {
                  return (
                    <>
                      <div className="flex flex-col items-center justify-center w-full h-full ">
                        <div className="flex items-center justify-center w-full h-full ">
                          <img width={300} src={item.img} alt="" />
                        </div>
                        <div className=" my-4 text-[18px] uppercase font-semibold  text-[#FF0303] text-center">
                          {item.title}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
