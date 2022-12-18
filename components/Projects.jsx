import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w[1240px] mx-auto px-2 py-16'>
        <p className='txt-xl tracking-widest uppercase text-[#5651e5] font-bold'>Projects</p>
        <h2>What I've built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <ProjectItem  
            title='Property Finder' 
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
          <ProjectItem  
            title='Crypto App' 
            backgroundImg={cryptoImg}
            projectUrl='/property'
          />
          <ProjectItem  
            title='Netflix' 
            backgroundImg={netflixImg}
            projectUrl='/property'
          />
          <ProjectItem  
            title='Twitch' 
            backgroundImg={twitchImg}
            projectUrl='/property'
          />

        </div>
      </div>     
    </div>
  )
}

export default Projects