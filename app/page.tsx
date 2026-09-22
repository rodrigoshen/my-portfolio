"use client"

import Image from "next/image";
import SunEffect from "./components/ui/SunEffect";
import { useEffect, useRef, useState } from "react";
import "./styles/parallax.css";
import { motion } from "framer-motion";
import TechnologyCarroselEffect from "./components/ui/TechnologyCarroselEffect";
import Header from "./components/Header";
import Footer from "./components/Footer";

function HomeContent() {

  const [ innerWidthProperty, setInnerWidthProperty ] = useState<boolean>(false); 
  const refPrincipal = useRef<HTMLDivElement>(null);
  const sunEffectRef = useRef<HTMLDivElement>(null) as any;
  const textPrincipalRef = useRef<HTMLDivElement>(null) as any;

  const sentence = {
    hidden : { opacity : 1 },
    visible : {
      opacity : 1,
      transition : {
        delay : 1.7,
        staggerChildren : 0.08, 
      }
    }
  }

  const letter = {
    hidden : { opacity : 0, y : 50 },
    visible : {
      opacity : 1,
      y : 0
    }
  }

  const line = "Bem-vindo ao meu Portfólio"

  useEffect( () => {

    let inner = window.innerWidth;

    if ( inner < 800 ) {
        setInnerWidthProperty(true)
    } else {
      setInnerWidthProperty(false);
    }

  }, [ innerWidthProperty ]); 

  useEffect( () => {

    const handleScroll = () => {
      const value = window.scrollY;

      if (sunEffectRef.current) {
        sunEffectRef.current.style.marginTop = value * 0.7 + "px";
        sunEffectRef.current.style.marginLeft = value + 0.7 + "px";
        textPrincipalRef.current.style.marginTop = value * 0.7 + "px";

      }      
    }

    

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, []);

   const scrollToSection = () => {

        if ( refPrincipal.current ) {
          refPrincipal.current.scrollIntoView({behavior : "smooth"});
        }

      }


  return (
    <div
      className="h-auto"
    >
      <main
        className=" flex flex-col justify-center items-center h-screen"  
      >

        { innerWidthProperty 
          ? 
          <Image className="relative z-20" src={"/logo-1.png"} width={300} height={300} alt="logo-image"/>
          : 
          <Header
          onClickScroll={scrollToSection}
          />   
        }        
        
            <video
          className="absolute inset-0 w-screen h-screen object-cover" 
          autoPlay playsInline loop muted>
            <source src="/videos/background.mp4" type="video/mp4"/>
            Your Browser does not support video tag.
          </video>

         <motion.h1
         className="text-principal relative text-[#F8D097] text-6xl max-md:text-3xl font-bold z-10 top-0 left-0"
          variants={sentence}
          initial="hidden"
          animate="visible"
          ref={textPrincipalRef}
         >
            {line.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })}
         </motion.h1>
        
          
        {/* <div
          className="parallax"
        >
           <Image className="rocks max-md:scale-125" src={"/rocks.png"} width={1000} height={1000} alt="rocks-image"/> 
          <Image className="rocks-2 transform scale-x-[-1] max-md:scale-125" src={"/rocks.png"} width={1000} height={1000} alt="rocks-image"/>
          <Image className="cachoeira" src={"/cachoeira-2.png"} width={200} height={200} alt="cachoeira-photo"/>  
          {
            windowValue ? <Image className="tree scale-200" src={"/tree.png"} width={3000} height={3000} alt="tree-image"/> 
            :
            <Image className="tree scale-200" src={"/tree.png"} width={1500} height={1500} alt="tree-image"/>
          } 
          <SunEffect/>
        </div> */}

      </main>

      <section
        ref={refPrincipal}
        className="principal relative flex justify-center items-center flex-row max-md:flex-col gap-50 max-md:gap-0 bg-[#0089B8] h-auto p-10 max-md:h-auto max-md:pt-10 max-md:pb-4 overflow-x-hidden z-20"
      >
        <div
          className="flex flex-row justify-center items-center gap-30 max-md:gap-2 w-[80%] max-md:w-screen max-md:flex-col"
        >
            <motion.div
              initial={{ x : -100, opacity : 0 }}
              whileInView={{ x : 0, opacity : 1 }}
              transition={{ ease : "anticipate", duration : 0.7 }}
              viewport={{ once : true,  amount : 0.2 }}
            >
              { innerWidthProperty 
              ? 
              <Image className="rounded-full" src={"/images/photo-rodrigo.png"} width={300} height={300} alt="photo-rodrigo-carvalho"/>
              : 
              <Image className="rounded-full" src={"/images/photo-rodrigo.png"} width={400} height={400} alt="photo-rodrigo-carvalho"/> }
              
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 w-300 max-md:w-auto max-md:p-8 "
            >
              <div
                className="flex flex-col gap-1"
              >
                
                  <motion.h1
                initial={{ x : 100, opacity : 0 }}
                whileInView={{ x : 0, opacity : 1 }}
                transition={{ ease : "anticipate", duration : 0.7 }}
                viewport={{ once : true, amount : 0.2 }}
                  className="text-white text-5xl font-bold font-main"
                >Olá👋, Sou Rodrigo Carvalho</motion.h1>
                <motion.h2 
                  initial={{ x : 100, opacity : 0 }}
                  whileInView={{ x : 0, opacity : 1 }}
                  transition={{ ease : "anticipate", duration : 0.9 }}
                  viewport={{ once: true,  amount : 0.1 }}
                  className="text-white text-3xl font-normal font-main"
                >Desenvolvedor de Software Front-End e UX/UI Designer</motion.h2>
              </div>
              
              
                <motion.p
                initial={{ x : 100, opacity : 0 }}
                whileInView={{ x : 0, opacity : 0.75 }}
                transition={{ ease : "anticipate", duration : 1.1 }}
                viewport={{once: true, amount : 0.2, }}
                className="opacity-0 text-xl font-main"
                >
                  Trabalho com está área a mais de 4 anos de experiência e tenho conhecimentos em diversas habilidades técnicas e profissionais, cada vez aprendendo e desenvolvendo minhas redes sociais e soft skills para aprender mais sobre o mercado e dominar mais sobre esse mundo tão competitivo  
                </motion.p>
              
            </motion.div>

          </div>
      </section>


      <section
        className="relative flex flex-col justify-center items-center bg-[#0089B8] z-20"
      >
        <div
          className="flex justify-center items-center w-[80%]"
        >
          <motion.h1
          initial={{ x : -100, opacity : 0 }}
          whileInView={{ x : 0, opacity : 1 }}
          transition={{ ease : "anticipate", duration : 1.1 }}
          viewport={{once: true, amount : 0.2, }}
          className="flex items-center font-bold text-5xl font-main"
        >
          Criando soluções<br/> para o mundo<br/> digital de forma inteligente 🧠
        </motion.h1>
        </div>
        

          <div
            className="flex flex-col justify-center items-center w-screen"
          >
              <h2
              className="relative font-light text-xl top-25 bg-zinc-200/10 pt-2 pr-4 pl-4 pb-2 rounded-xl border-zinc-50 border-2"
            >Ferramentas que utilizo 🧰⚒️
            </h2>
            <TechnologyCarroselEffect/>
            </div>
        
      </section>


      <Footer/>

    </div>
  )
}



export default function Home() {
  return (
      <HomeContent/>
  )
}