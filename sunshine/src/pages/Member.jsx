
import React from "react";
import member1 from "../Assets/Members/member1.png";
import member2 from "../Assets/Members/member2.png";
import member3 from "../Assets/Members/member3.png";
import member4 from "../Assets/Members/member4.png";
import member5 from "../Assets/Members/member5.png";
import member6 from "../Assets/Members/member6.png";
import member7 from "../Assets/Members/member7.png";
import member8 from "../Assets/Members/member8.png";
import member9 from "../Assets/Members/member9.png";
import member10 from "../Assets/Members/member10.png";
import member11 from "../Assets/Members/member11.png";
import member12 from "../Assets/Members/member12.png";
import member13 from "../Assets/Members/member13.png";
import member14 from "../Assets/Members/member14.png";
import member15 from "../Assets/Members/member15.png";
import member16 from "../Assets/Members/member16.png";  
import member17 from "../Assets/Members/member17.png";
import member18 from "../Assets/Members/member18.png";
import member19 from "../Assets/Members/member19.png";
import member20 from "../Assets/Members/member20.png";
import member21 from "../Assets/Members/member21.png";
import member22 from "../Assets/Members/member22.png";
import member23 from "../Assets/Members/member23.png";
import member24 from "../Assets/Members/member24.png";
import member25 from "../Assets/Members/member25.png";
import member26 from "../Assets/Members/member26.png";
import member27 from "../Assets/Members/member27.png";
import member28 from "../Assets/Members/member28.png";
import member29 from "../Assets/Members/member29.png";
import member30 from "../Assets/Members/member30.png";
import member31 from "../Assets/Members/member31.png";
import member32 from "../Assets/Members/member32.png";
import member33 from "../Assets/Members/member33.png";
import member34 from "../Assets/Members/member34.png";




export default function Member() {
//     Y John Tony
// Black Belt II Dan
// J Jenolin
// Black Belt II Dan
// Joe M J Rejixson
// Black Belt I Dan
// D Nagarajan
// Black Belt II Dan
// S Jijo
// Black Belt I Dan
// J P Infant Jose
// Black Belt II Dan
// J Shyjin
// Black Belt I Dan
// P P Siva Yajnic
// Black Belt II Dan
// M D Jerlin Jershiya Mol
// Black Belt I Dan
// S Jisha
// Black Belt I Dan
// M D Jerlin Jershiya Mol
// Black Belt I Dan
// S Jisha
// Black Belt I Dan
// Y Shantin
// Black Belt I Dan
// Advin C Raj
// Black Belt I Dan
// Arvin C Raj
// Black Belt I Dan
// A V Abin Vishal
// Black Belt II Dan
// Alagananda
// Black Belt I Dan
// Varun Krishna S G Kesan
// Black Belt I Dan
// A Arun
// Black Belt II Dan
// S S Aswin Krishna
// Black Belt I Dan
// J V Jefrin
// Black Belt II Dan
// A Anwin
// Black Belt I Dan
// A S Nifa
// Black Belt I Dan
// S Galvin Robert
// Black Belt II Dan
// S Camryn Robert
// Black Belt I Dan
    const data =[
        {name: "P Samuel", belt: "Black Belt V Dan", image: member1},
        {name: "J Jothinthar", belt: "Black Belt II Dan", image: member2},
        {name: "Asir Benny", belt: "Black Belt I Dan", image: member3},
        {name: "S Jenil kishor", belt: "Black Belt I Dan", image: member4},
        {name: "B Ajay Beswin", belt: "Black Belt I Dan", image: member5},
        {name: "R V Reji", belt: "Black Belt III Dan", image: member6},
        {name: "Vignesh S", belt: "Black Belt III Dan", image: member7},
        {name: "S Abinesh", belt: "Black Belt III Dan", image: member8},
        {name: "H Adlin Jones", belt: "Black Belt I Dan", image: member9},
        {name: "E J ENITON", belt: "Black Belt II Dan", image: member10},
        {name: "Joe M J Marixson", belt: "Black Belt II Dan", image: member11},
        {name: " Y John Tony", belt: "Black Belt II Dan", image: member12},
        {name: "J Jenolin", belt: "Black Belt II Dan", image: member13},
        {name: "Joe M J Rejixson", belt: "Black Belt I Dan", image: member14},
        {name: "D Nagarajan", belt: "Black Belt II Dan", image: member15},
        {name: "S Jijo", belt: "Black Belt I Dan", image: member16},
        {name: "J P Infant Jose", belt: "Black Belt II Dan", image: member17},
        {name: "J Shyjin", belt: "Black Belt I Dan", image: member18},
        {name: "P P Siva Yajnic", belt: "Black Belt II Dan", image: member19},
        {name: "M D Jerlin Jershiya  ", belt: "Black Belt I Dan", image: member20},
        {name: "S Jisha", belt: "Black Belt I Dan", image: member21},
        {name: "Y Shantin", belt: "Black Belt I Dan", image: member22},
        {name: "Advin C Raj", belt: "Black Belt I Dan", image: member23},
        {name: "Arvin C Raj", belt: "Black Belt I Dan", image: member24},
        {name: "A V Abin Vishal", belt: "Black Belt II Dan", image: member25},
        {name: "Alagananda", belt: "Black Belt I Dan", image: member26},
        {name: "Varun Krishna S G  ", belt: "Black Belt I Dan", image: member27},
        {name: "A Arun", belt: "Black Belt II Dan", image: member28},
        {name: "S S Aswin Krishna", belt: "Black Belt I Dan", image: member29},
        {name: "J V Jefrin", belt: "Black Belt II Dan", image: member30},
        {name: "A Anwin", belt: "Black Belt I Dan", image: member31},
        {name: "A S Nifa", belt: "Black Belt I Dan", image: member32},
        {name: "S Galvin Robert", belt: "Black Belt II Dan", image: member33},
        {name: "S Camryn Robert", belt: "Black Belt I Dan", image: member34},



     ]
  return (
    <div class=" p-1 lg:p-10 mt-5">
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-8 ">
        {data.map((data) => (
            
            <div className="border-solid w-full md:w-[400px] max-w-2xl  lg:w-[400px]  justify-around  bg-white items-center  border-[#f2f4f7] shadow-[0px_4px_6px_-2px_rgba(16,_24,_40,_0.03),_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08)]  flex flex-row   h-[220px]   border rounded-lg">
              <div className="w-full p-12 rounded-full ">
                <img
                  className="  drop-shadow-xl    rounded-full  sm:max-w-[12rem] md:max-w-[15rem]      "
                  src= {data.image}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-full font-sans text-2xl font-bold uppercase whitespace-nowrap">
                    {data.name}
                </div>
    
                <div className="w-full font-sans text-2xl font-bold capitalize whitespace-nowrap">
                    {data.belt}
                </div>
              </div>
            </div>
        ))
        }
         
      </div>
    </div>
  );
}

