import Image from 'next/image'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w[1240px] mx-auto px-2 py-16'>
        <p className='txt-xl tracking-widest uppercase text-[#5651e5] font-bold'>Projects</p>
        <h2>What I've built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadoy-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to[#709dfff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={propertyImg} alt='/'/>

          </div>

        </div>
      </div>     
    </div>
  )
}

export default Projects