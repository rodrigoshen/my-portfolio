import { motion } from "framer-motion"
import Image from "next/image"
import "../../styles/carousel/technologyCarousel.css"

export default function TechnologyCarroselEffect() {

    return (
        <motion.div
            initial={{opacity : 0, y : 200 }}
            animate={{ opacity : 1,  y : 0 }} 
            transition={{ease : "anticipate", duration : 0.7}}
            className="carousel flex flex-row justify-around items-center w-[80%] h-40 mt-40 border-t-amber-50 border-b-amber-50 border-b-2 border-t-2"
        >
            <div
                
                className="group"
            >
                    <Image aria-hidden className="card" src={"/images/technology/package/angular.png"} width={100} height={100} alt="angular-image"/>
                    <Image aria-hidden className="card" src={"/images/technology/package/css.png"} width={100} height={100} alt="angular-image"/>
                    <Image aria-hidden className="card" src={"/images/technology/package/figma.png"} width={100} height={100} alt="angular-image"/>
                    <Image aria-hidden className="card" src={"/images/technology/package/html.png"} width={100} height={100} alt="angular-image"/>
                    <Image aria-hidden className="card" src={"/images/technology/package/react.png"} width={100} height={100} alt="angular-image"/>
            </div>
        </motion.div>
    )
}