import React from "react";
import "./ClubCard.css";
export default function ClubCard({
  imgSrc,
  alt,
  title,
  InstructorName,
  ClassTime,
  belt,
  Venue,
  time
}) {
  return (
    <div className="card">
      <img
        className=" w-full h-full lg:w-full  lg:h-[18rem]"
        src={imgSrc}
        alt={alt}
      />
      <div className="card__content">
        <h1 className="my-2 text-center uppercase text-[16px] font-bold ">
          {title}
        </h1>
        <div className="flex flex-col ">
          <div className="flex justify-around w-full ">
            <div className="text-[14px] h-full w-[30%]">Instructor :</div>
            <div className="text-[14px] flex flex-col justify-start  h-20 w-[70%]">
            <div  >
              
                 {InstructorName}
              </div>
              <div  >
               {belt}
           </div>
            </div>
          </div>
          <div className="flex justify-around w-full py-1 ">
            <div className="text-[14px] h-full w-[30%]">Timing :</div>
            <div className="text-[14px] flex flex-col justify-start  h-20 w-[70%]">
            <div  >
              
                 {ClassTime}
              </div>
              <div  >
               {time}
           </div>
           </div>
          </div>
          <div className="flex justify-around w-full ">
            <div className="text-[14px] h-full w-[30%]">Venue :</div>
            <div className="text-[14px] flex justify-center  h-20 w-[70%]">
              {Venue}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
