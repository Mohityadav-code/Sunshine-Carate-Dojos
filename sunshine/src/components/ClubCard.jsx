import React from "react";
import "./ClubCard.css";
export default function ClubCard({ imgSrc, alt, title, InstructorName ,ClassTime,Venue}) {
  return (
    <div className="card">
      <img className="card__img" src={imgSrc} alt={alt} />
      <div className="card__content">
        <h1 className="card__header text-center uppercase  ">{title}</h1>
        <div className="card__text">
          <div className=" flex justify-around  items-center w-full ">
            <div className="card__description h-full w-[60%]">Instructor :</div>
            <div className="card__description flex justify-center items-center h-20 w-full">{InstructorName}</div>
          </div>
          <div className=" flex justify-around  items-center w-full py-1 ">
            <div className="card__description h-full w-[60%]">Timing :</div>
            <div className="card__description h-full w-full">{ClassTime}</div>
          </div>
          <div className=" flex justify-around  items-center w-full ">
            <div className="card__description h-full w-[60%]">Venue :</div>
            <div className="card__description  w-[63%] h-10 ">{Venue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
