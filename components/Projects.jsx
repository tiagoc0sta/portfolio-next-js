import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mediumImg from '../public/assets/projects/medium.jpg';
import farma2Img from '../public/assets/projects/farma2.jpg';
import ProjectItem from './ProjectItem';

import farmaImg from '../public/assets/projects/farma.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full '>
      <div className='max-w[1240px] mx-auto px-2 py-20 '>
        <p className='uppercase text-xl tracking-widest text-[#000000] font-bold py-4 px-4'>
          Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={farma2Img}
            projectUrl='https://uxfol.io/p/6bd5c6e8/034c2487'
          />

          <ProjectItem
            title='Netflix'
            backgroundImg={mediumImg}
            projectUrl='https://medium.com/creditas-tech/como-criamos-as-personas-internas-da-creditas-aliando-ux-a-people-3a5a83d89726'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
