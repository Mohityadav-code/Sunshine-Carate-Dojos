import React from 'react'
import ClubCard from './ClubCard'

export default function ClubsLayout() {
  return (
    <>  <div className="  px-4 pt-5 pb-10 bg-[#F8F9F9] ">
    <div className="text-5xl py-5 mb-14 underline underline-offset-4 text-center font-sans font-black text-[#222831] w-full">
      CLUBS
    </div>
    <div className="flex flex-wrap items-center justify-around w-full gap-10 lg: lg:flex-nowrap ">
      <div className="grid__item  w-[350px]  lg:w-[300px] ">
        <ClubCard
          imgSrc="https://images.unsplash.com/photo-1529566193698-bc394165d541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Snowy Mountains"
          title="Chemmankalai Dojo"
          InstructorName="P.P.Siva Yajnic "
          belt=" Black Belt II Dan"
          ClassTime="Sunday Evening  "
          time="4:30 PM to 6:30 PM"
          Venue=" SVN Bhavan, Chemmankalai,Edaicode."
        />
      </div>

      <div className="grid__item  w-[350px]  lg:w-[300px]">
        <ClubCard
          imgSrc="https://images.unsplash.com/photo-1601878458462-487dd38a06f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt="Desert"
          title="MULucode dojo"
          InstructorName="S. Galvin Robert "
          belt=" Black Belt II Dan"
          ClassTime="Sunday Evening  "
          time="4:30 PM to 6:30 PM"
          Venue=" Mulucode  
Chemmankalai,Edaicode"
        />
      </div>
      <div className="grid__item  w-[350px]  lg:w-[300px]">
        <ClubCard
          imgSrc="https://images.unsplash.com/photo-1601878457596-d805acc3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt="Canyons"
          title="Padantalumood dojo"
          InstructorName="Arvin. C. Raj "
          belt=" Black Belt II Dan"
          
          ClassTime="Saturday Evening "
          time=" 4:00 PM to 6:00 PM"
          Venue=" Padantalumood. 
Chemmankalai,Edaicode"
        />
      </div>
      <div className="grid__item  w-[350px]  lg:w-[300px]">
        <ClubCard
          imgSrc="https://images.unsplash.com/photo-1555597408-26bc8e548a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1223&q=80"
          alt="Canyons"
          title="KOnacheri dojo"
          InstructorName="M. Aarush"
          belt="Brown Belt"
          ClassTime="Saturday Evening "
          time=" 4:00 PM to 6:00 PM"
          Venue=" Konacheri. 
Chemmankalai,Edaicode"
        />
      </div>
    </div>
  </div></>
  )
}
