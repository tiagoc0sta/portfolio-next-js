import Image from 'next/image'
import React from 'react'
import AboutImg from '../public/assets/notebook.jpg'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] '>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>I'm an UX Researcher</p>
          <p className='py-2 text-gray-600'>Hey!
            I'm Christtiane, an UX Researcher!
            Currently, I'm working as a UX Researcher on Creditas Fintech, expanding my training in the world of research based on user pain points.
          </p>
          <p className='py-2 text-gray-600'>Hey!
            I'm Christtiane, an UX Researcher!
            Currently, I'm working as a UX Researcher on Creditas Fintech, expanding my training in the world of research based on user pain points.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={AboutImg} alt="/" />
        </div>
      </div>
      
    </div>
  )
}

export default About