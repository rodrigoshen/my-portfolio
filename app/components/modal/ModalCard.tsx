import { X } from "lucide-react"
import Image from "next/image"

interface ModalCardProps {
    modalClose : () => void
    name : string
    description : string
    open :  boolean
    image : string
}

export default function ModalCard( { modalClose, name, description, open, image } : ModalCardProps ) {

    const handleClickOverlay = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            modalClose()
        }
    }

    return (
        <div
            onClick={handleClickOverlay}
            className={`fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 justify-center transition-colors items-center ${ open ? "visible bg-black/20" : "invisible"}`}
        >
            <div
                    
                    className={`relative flex flex-col items-start bg-white rounded-xl left-[10%] top-[5%] shadow p-6 h-[90%] w-[80%] transition-all ${ open ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}

                >
                    <button
                            className="relative buttonModalClose bg-white/75 rounded-full p-1 "
                            onClick={modalClose}
                          >
                            <X size={40} color="black"/>
                          </button>
                    <Image src={image} width={300} height={300} alt="logo-image"/>
                    <h1
                        className="text-2xl font-bold mb-4 text-black"
                    >   
                    { name }
                    </h1>
                    <p
                        className="text-lg text-black"
                    >
                        { description }
                    </p>
            </div>
        </div>
    )
}
 