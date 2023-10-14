import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full '>
      <div className='max-w[1240px] mx-auto px-2 py-20'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5] font-bold py-4 px-4'>
          Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
          />
          <ProjectItem
            title='Netflix'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
          />
          <ProjectItem
            title='Twitch'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
