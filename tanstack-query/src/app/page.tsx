"use client";

import { ShineBorder } from "@/components/ui/shine-border";
import Link from "next/link";

export default function HomePage(){
  return(
    
    <div className='container w-full h-screen p-1 flex justify-center items-center'>
  
     <main className="w-[80%] h-full flex flex-col justify-center items-center">
      <h1 className=" text-xl lg:md:text-3xl font-boldonse">All Product Details</h1><br></br>
      
      <div className="w-[25%] md:lg:w-[15%] relative text-center">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
      <Link href={'Product'} className="text-[0.7rem] md:lg:text-lg " >
      
      Click Here</Link>
      </div>
     </main>
     
    </div>
    
  )
}