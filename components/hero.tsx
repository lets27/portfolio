import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import LightUpBtn from './ui/LightUpBtns';
import { FaLocationArrow } from 'react-icons/fa';
const Hero = () => {
    const handleClick=()=>{}
  return (
    <div className='pb-20 pt-36'>

        <Spotlight className="-top-40 -left-10 md:left-32 md-top-20 h-screen " fill="blue"/>
        <Spotlight className="top-10 left-10 md:left-full h-[80vh] w-[50vw] " fill="purple"/>
        <Spotlight className="top-28 -left-80 md:left-32 h-[80vh] w-[50vw] " fill="blue"/>
      {/* grid container */}
    <div className="absolute top-10 left-0 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
     
    </div>

{/* heading */}
<div className='flex justify-center relative z-10'>
    <div className='max-w-[89vw] md-max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
        <h2 className=' uppercase tracking-widest text-xs text-center text-blue  max-w-80'>Dynamic web Magic with Letso Mogwera</h2>
    
    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl'
    
    words="Engineering Scalable Systems with Precision and Purpose"/>

   <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg'>
  Hi! I&apos;m <span className="text-purple">Letso</span>, a Computer Systems Engineer & Full-stack Developer based in Botswana.
</p>
    <a href="#about"><LightUpBtn title="show my work" position="left" 
    icon={<FaLocationArrow/>}/></a>
    </div>
</div>


    </div>
  )
}

export default Hero