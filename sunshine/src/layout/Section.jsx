import React from 'react'

export default function Section({children ,bg,title}) {
  return (
    <div className={` ${bg} w-full h-full py-3 `}>
         <div className="text-5xl py-5 pb-7 underline underline-offset-4 text-center font-sans font-black text-[#222831] w-full">
          {title}
          </div>
        
        <div className=' w-full h-full'> 
         
            {children}
        </div>
    </div>
  )
}
