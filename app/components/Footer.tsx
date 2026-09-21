import { Mail } from "lucide-react"
import Image from "next/image";

export default function Footer() {


    const assunto = encodeURIComponent("Contato pelo site");
    const corpo = encodeURIComponent("Olá, gostaria de saber mais sobre...");
    const link = `https://mail.google.com/mail/?view=cm&fs=1&to=rodrigocarvalhoshen@gmail.com?subject=${assunto}&body=${corpo}`;


    return (
        <footer
            className="flex flex-col justify-between items-center bg-[#0089B8] h-auto pb-10 pt-20 gap-20"
        >
            <div>
                <div></div>
                <div></div>
                <div
                    className="flex flex-col gap-1"
                >
                    <h2
                        className="font-main text-xl font-semibold"
                    >
                        Redes Sociais
                    </h2>
                    <nav
                        className="flex flex-row gap-2"
                    >
                         <a href="">
                        <Image src="/icons/linkedin.png" width={25} height={25} alt="whatsapp-image"  />
                        </a>
                        <a href="">
                            <Image src="/icons/whatsapp.png" width={25} height={25} alt="whatsapp-image"  />
                        </a>
                        <a 
                        className="bg"
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link}> 
                            <Mail/>
                        </a>
                    </nav>
                   
                </div>
            </div>

            <div className="w-[75%] h-[1px] bg-zinc-50"/>

            <div
                className="flex justify-center items-center w-[80%] h-50"
            >
                <h1
                    className="font-bryndan-write-book text-9xl max-md:text-3xl"
                >
                    Think Smart, Think Human
                </h1>
            </div>
        </footer>
    )
}