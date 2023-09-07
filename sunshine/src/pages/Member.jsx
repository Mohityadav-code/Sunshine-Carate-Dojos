
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

export default function Member() {
    const data =[
        {name: "P Samuel", belt: "Black Belt V Dan", image: member1},
        {name: "J Jothinthar", belt: "Black Belt II Dan", image: member2},
        {name: "Asir Benny", belt: "Black Belt I Dan", image: member3},
        {name: "S Jenil kishor", belt: "Black Belt I Dan", image: member4},
        {name: "B Ajay Beswin", belt: "Black Belt I Dan", image: member5},
        {name: "R V Reji", belt: "Black Belt III Dan", image: member6},
        {name: "Vignesh S", belt: "Black Belt III Dan", image: member7},
        {name: "S Abinesh", belt: "Black Belt III Dan", image: member8},
        {name: "H Adlin Jones", belt: "Black Belt l Dan", image: member9},
        {name: "E J ENITON", belt: "Black Belt ll Dan", image: member10},
        {name: "Joe M J Marixson", belt: "Black Belt II Dan", image: member11},
     ]
  return (
    <div class=" p-1 lg:p-10 mt-5">
      <div className="flex flex-wrap gap-8  w-full h-full justify-center items-center  ">
        {data.map((data) => (
            
            <div className="border-solid w-full md:w-[400px] max-w-2xl  lg:w-[400px]  justify-around  bg-white items-center  border-[#f2f4f7] shadow-[0px_4px_6px_-2px_rgba(16,_24,_40,_0.03),_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08)]  flex flex-row   h-[220px]   border rounded-lg">
              <div className="   rounded-full p-12      w-full  ">
                <img
                  className="    rounded-full  sm:max-w-[12rem] md:max-w-[15rem]      "
                  src= {data.image}
                  alt="profile"
                />
              </div>
              <div className="flex flex-col    justify-center items-center    h-full w-full">
                <div className="whitespace-nowrap text-2xl font-sans font-bold capitalize w-full">
                    {data.name}
                </div>
    
                <div className="whitespace-nowrap text-2xl font-sans font-bold capitalize w-full">
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


 
// // import member12 from "../Assets/Members/member13.png";
// // import member13 from "../Assets/Members/member14.png";
// // import member14 from "../Assets/Members/member15.png";
// // import member15 from "../Assets/Members/member16.png";
// // import member16 from "../Assets/Members/member17.png";
// // import member17 from "../Assets/Members/member18.png";
// // import member18 from "../Assets/Members/member19.png";
// // import member19 from "../Assets/Members/member20.png";
// // import member20 from "../Assets/Members/member21.png";

// export default function Member() {
// //     P Samuel
// // Black Belt V Dan
// // J Jothinthar
// // Black Belt II Dan
// // Asir Benny
// // Black Belt I Dan
// // S Jenil kishor
// // Black Belt I Dan
// // B Ajay Beswin
// // Black Belt I Dan
// // R V Reji
// // Black Belt III Dan
// // Vignesh S
// // Black Belt III Dan
// // S Abinesh
// // Black Belt III Dan
// // H Adlin Jones
// // Black Belt l Dan.
// // E J ENITON
// // Black Belt ll Dan
// // Joe M J Marixson
// // Black Belt II Dan
//  const data =[
//     {name: "P Samuel", belt: "Black Belt V Dan", image: member1},
//     {name: "J Jothinthar", belt: "Black Belt II Dan", image: member2},
//     {name: "Asir Benny", belt: "Black Belt I Dan", image: member3},
//     {name: "S Jenil kishor", belt: "Black Belt I Dan", image: member4},
//     {name: "B Ajay Beswin", belt: "Black Belt I Dan", image: member5},
//     {name: "R V Reji", belt: "Black Belt III Dan", image: member6},
//     {name: "Vignesh S", belt: "Black Belt III Dan", image: member7},
//     {name: "S Abinesh", belt: "Black Belt III Dan", image: member8},
//     {name: "H Adlin Jones", belt: "Black Belt l Dan", image: member9},
//     {name: "E J ENITON", belt: "Black Belt ll Dan", image: member10},
//     {name: "Joe M J Marixson", belt: "Black Belt II Dan", image: member11},
//  ]
//   return (
//     <div class="p-10">
//       {data.map((data) => (
//         <div className="flex flex-wrap gap-8  w-full h-full justify-center items-center  ">
//           <div className="border-solid w-[400px]  justify-around   items-center  border-[#f2f4f7] shadow-[0px_4px_6px_-2px_rgba(16,_24,_40,_0.03),_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08)]   flex flex-row   h-[220px]   border rounded-lg">
//             <div className="   rounded-full p-10  h-full     w-full  ">
//               <img
//                 className=" drop-shadow-lg     rounded-full      "
//                 src={data.image}
//                 alt="profile"
//               />
//             </div>
//             <div className="flex flex-col    justify-center items-center    h-full w-full">
//               <div className="whitespace-nowrap text-2xl font-sans font-bold capitalize w-full">
//                 {data.name}
//               </div>

//               <div className="whitespace-nowrap text-2xl font-sans font-bold capitalize w-full">
//                 {data.belt}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// <div className="border-solid w-full md:w-[400px] max-w-2xl  lg:w-[400px]  justify-around  bg-white items-center  border-[#f2f4f7] shadow-[0px_4px_6px_-2px_rgba(16,_24,_40,_0.03),_0px_12px_16px_-4px_rgba(16,_24,_40,_0.08)]  flex flex-row   h-[220px]   border rounded-lg">
// <div className="   rounded-full p-12      w-full  ">
//   <img
//     className="    rounded-full  sm:max-w-[12rem] md:max-w-[15rem]      "
//     src={member1}
//     alt="profile"
//   />
// </div>
// <div className="flex flex-col    justify-center items-center    h-full w-full">
//   <div className="whitespace-nowrap text-2xl font-sans font-bold capitalize w-full">
//     Sensai. E.J.Eniton
//   </div>

//   <div className="whitespace-nowrap text-2xl font-sans font-bold capitalize w-full">
//     Black Belt II Dan
//   </div>
// </div>
// </div>