import Image from "next/image"; 
import { useEffect, useState } from "react";

export default function PlantsBackground() {


    const [width, setWidth] = useState(true);

    useEffect( () => {

        
            if (window.innerWidth < 700) {
                setWidth(true);
            } else {
                setWidth(false);
            }
    

        console.log("Width state:", width);

    },[width]);


    return (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-10">
                
                {
                    width 
                    ? 
                     <Image 
                    className="absolute mt-200 ml-0 z-10"
                    src="/images/plants/1.png" width={200} height={200} alt="plant-image" />
                    :
                     <Image 
                    className="absolute mt-180 ml-120 z-60"
                    src="/images/plants/1.png" width={500} height={500} alt="plant-image" />
                }
               
                <Image 
                    className="absolute mt-200 ml-0 z-10"
                    src="/images/plants/2.png" width={300} height={300} alt="plant-image" />
                <Image 
                    className="absolute mt-60 -ml-20 z-10"
                        src="/images/plants/3.png" width={200} height={200} alt="plant-image" />
                {
                    width ?
                        <Image 
                    className="absolute mt-190  ml-30 z-60"
                    src="/images/plants/4.png" width={1000} height={1000} alt="plant-image" />
                    :
                        <Image 
                    className="absolute mt-30 min-md:mt-120 ml-320 z-60"
                    src="/images/plants/4.png" width={1000} height={1000} alt="plant-image" />
                }

                <Image
                className="absolute mt-180 ml-40 z-10"
                src="/images/plants/5.png" width={300} height={300} alt="plant-image" />
                {
                    width 
                    ?
                    <Image 
                className="absolute mt-0 min-md:mt-10 min-md:ml-400 ml-50 z-10"
                src="/images/plants/6.png" width={300} height={300} alt="plant-image" />
                :
                <Image 
                className="absolute mt-0 min-md:mt-10 min-md:ml-370 ml-50 z-10"
                src="/images/plants/6.png" width={600} height={600} alt="plant-image" />
                }
                {
                    width 
                    ?
                    <Image className="absolute hidden top-0 left-0 w-full h-full object-cover z-40" 
                 src="/images/plants/pedra.png" width={1800} height={1800} alt="plant-image" />
                 :
                 <Image className="absolute top-60 left-170 w-full h-full object-cover z-40" 
                 src="/images/plants/pedra.png" width={1800} height={1800} alt="plant-image" />          
                }
                
            </div>
        </div>
    )
}
