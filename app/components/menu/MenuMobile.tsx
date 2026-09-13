"use client"

import { useState } from "react"
import { MenuIcon , X } from "lucide-react";

export default function MenuMobile(){
    
    const [active, setActive] = useState(false);
    
    return (
        <div
            className={`flex justify-center items-center w-[50%] h-screen ${active ? "bg-amber-200" : "bg-amber-950" }`}
        >
            <button
                onClick={ () => setActive(true) }
            >
                <MenuIcon size={25}/>
            </button>

            <nav>

                <button
                    onClick={ () => setActive(false)}
                >
                    <X size={25}/>
                </button>

                <a href="">Home</a>
                <a href="">About Me</a>
                <a href="">Introduction</a>
            </nav>
        </div>
    )
}