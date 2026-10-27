import Image from "next/image"
import { motion } from "framer-motion"
import ModalCard from "./modal/ModalCard"
import { useRef, useState } from "react"

interface CardProps {
    image : string
    name : string
    description : string 
    link : string
    x? : number
}

export default function Card(
    { image, name, description, x, link } : CardProps
) {


    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null)

    return (
        <motion.div
        className="flex flex-col justify-center items-center gap-5 bg-[#0089B8] p-5 w-[80%] md:w-[50%] border-2"
            initial={{ opacity : 0 ,  x: x || 200 }}
            whileInView={{ opacity : 1 , x: 0 }}
            viewport={{ once: true }}
            transition={{ ease : "anticipate",  duration: 0.5 }}
        >
            <Image className="relative z-20 border-2 rounded-xl" src={ image } width={300} height={300} alt="logo-image"/>
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
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#0089B8] px-4 py-2 rounded-md hover:bg-white/80 hover:scale-95 transition-all duration-300"
            >
                Abrir Projeto
            </button>

            <ModalCard
                link={link}
                image={image}
                open={isModalOpen}
                modalClose={() => setIsModalOpen(false)}
                name={name}
                description={description}
            />

        </motion.div>
    )
}