"use client"

import Image from "next/image";
import SunEffect from "@/components/ui/SunEffect";
import { useEffect, useRef, useState } from "react";
import "./styles/parallax.css";

function HomeContent() {

  const logoRef = useRef<HTMLDivElement>(null);

  useEffect( () => {

    const handleScroll = () => {
      const value = window.scrollY;

      if (logoRef.current) {
        logoRef.current.style.marginTop = value * 2.5 + "px";
      }      
    }

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

  const [ windowValue, SetWindowValue ] = useState<boolean>(false);
 
  useEffect( () => {

    let windowValueTime = window.innerWidth;

    console.log(" valor do window value: ", windowValueTime)

    if ( windowValueTime < 800 ) {
      SetWindowValue(true);
    } else {
      SetWindowValue(false)
    }

  }, [windowValue]);

  return (
    <div>
      <main
        className="relative flex flex-col justify-center items-center w-screen h-screen bg-[url('/background-1.png')] bg-no-repeat bg-cover overflow-x-hidden "  
      >
        
          <div
          ref={logoRef}
          className="logo"
        >
          <Image
           className="relative max-md:w-60 max-md:h-60 max-md:top-20" src="/logo-1.png" width={300} height={300} alt="logo_site"/>
        </div>
        
          
        <div
          className="parallax"
        >
          <Image className="rocks max-md:scale-125" src={"/rocks.png"} width={1000} height={1000} alt="rocks-image"/>
          <Image className="rocks-2 transform scale-x-[-1] max-md:scale-125" src={"/rocks.png"} width={1000} height={1000} alt="rocks-image"/>
          
          {
            windowValue ? <Image className="tree scale-200" src={"/tree.png"} width={3000} height={3000} alt="tree-image"/> 
            :
            <Image className="tree scale-200" src={"/tree.png"} width={1500} height={1500} alt="tree-image"/>
          }
          <SunEffect/>
        </div>
        
        
       
          
        
        
      </main>

      <section
        className="bg-[#0089B8] w-screen h-screen overflow-x-hidden"
      >

      </section>
    </div>
  )
}



export default function Home() {
  return (
      <HomeContent/>
  )
}