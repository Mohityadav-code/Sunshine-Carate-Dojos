import React from "react";
import ClubCard from "../components/ClubCard";

export default function Home() {
  return (
    <div>
      <div>
        <p class="text-[#D2001A] text-center font-sans text-[48px]  font-[700] leading-normal">
          Sunshine Budokan Karate Dojos
        </p>
        <p class="text-[#000] text-center font-sans text-[24px]  font-[700] leading-normal">
          Affiliated with KBI - Australia
        </p>
      </div>

      <div className="grid  px-4 py-10 bg-gray-200 ">
        <div className="grid__item">
          <ClubCard
            imgSrc="https://images.unsplash.com/photo-1529566193698-bc394165d541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Snowy Mountains"
            title="Chemmankalai Dojo"
            InstructorName="P.P.Siva Yajnic, Black Belt II Dan"
            ClassTime="Sunday Evening  4:30 PM to 6:30 PM"
            Venue=" SVN Bhavan, Chemmankalai,Edaicode."
          />
        </div>
      
        <div className="grid__item">
          <ClubCard
            imgSrc="https://images.unsplash.com/photo-1601878458462-487dd38a06f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Desert"
            title="MULucode dojo"
            InstructorName="S. Galvin Robert, Black Belt II Dan"
            ClassTime="Sunday Evening  4:30 PM to 6:30 PM"
            Venue=" Mulucode  
 Chemmankalai,Edaicode"
          />
        </div>
        <div className="grid__item">
          <ClubCard
            imgSrc="https://images.unsplash.com/photo-1601878457596-d805acc3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Canyons"
            title="Padantalumood dojo"
            InstructorName="Arvin. C. Raj, Black Belt I Dan"
            ClassTime="Saturday Evening  4:00 PM to 6:00 PM"
            Venue=" Padantalumood. 
 Chemmankalai,Edaicode"
          />
        </div>
        <div className="grid__item">
          <ClubCard
            imgSrc="https://images.unsplash.com/photo-1555597408-26bc8e548a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1223&q=80"
            alt="Canyons"
            title="KOnacheri dojo"
            InstructorName="M. Aarush, Brown Belt"
            ClassTime="Saturday Evening  4:00 PM to 6:00 PM"
            Venue=" Konacheri. 
 Chemmankalai,Edaicode"
          />
        </div>
      </div>
    </div>
  );
}
