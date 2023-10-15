import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadoy-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300'>
      <Link href={projectUrl} target='_blank' rel='noopener noreferrer'>
        <Image className='rounded-xl ' src={backgroundImg} alt='/' />
      </Link>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'></div>
    </div>
  );
};

export default ProjectItem;
