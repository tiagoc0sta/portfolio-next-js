import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import farma2Img from '../public/assets/projects/farma2.jpg';
import ProjectItem from './ProjectItem';

import farmaImg from '../public/assets/projects/farma.jpg';

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
            backgroundImg={farmaImg}
            projectUrl='https://uxfol.io/p/6bd5c6e8/034c2487'
          />

          <ProjectItem
            title='Netflix'
            backgroundImg={farma2Img}
            projectUrl='/netflix'
          />

          <ProjectItem
            title='Netflix'
            backgroundImg={farma2Img}
            projectUrl='/netflix'
          />

          <ProjectItem
            title='Netflix'
            backgroundImg={farma2Img}
            projectUrl='/netflix'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
