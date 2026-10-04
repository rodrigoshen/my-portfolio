import Image from "next/image"
import { motion } from "framer-motion"

interface CardProps {
    image : string
    name : string
    description : string
    x? : number
}

export default function Card(
    { image, name, description, x } : CardProps
) {
    return (
        <motion.div
        className="flex flex-col justify-center items-center gap-5 bg-[#0089B8] p-5 w-[80%] md:w-[50%]"
            initial={{ opacity : 0 ,  x: x || 200 }}
            whileInView={{ opacity : 1 , x: 0 }}
            viewport={{ once: true }}
            transition={{ ease : "anticipate",  duration: 0.5 }}
        >
            <Image className="relative z-20" src={ image } width={300} height={300} alt="logo-image"/>
            <h1
                className="text-center text-2xl font-bold"
            >
                { name }
            </h1>
            <p
                className="text-center"
            >
                { description }
            </p>
        </motion.div>
    )
}