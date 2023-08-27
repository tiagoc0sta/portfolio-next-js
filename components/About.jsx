import Image from 'next/image';
import React from 'react';
import ChrisImg from '../public/assets/chris.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5] font-bold'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600 font-bold'>I am an UX Researcher</p>
          <p className='py-2 text-gray-600 '>
            Hey! I am Christtiane, an UX Researcher! Currently, I am working as
            a UX Researcher on Creditas Fintech, expanding my training in the
            world of research based on user pain points.
          </p>
          <Link
            href='/#projects'
            className='py-2 text-gray-600 underline cursor-pointer'
          >
            Check out some of my latest projects.
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={ChrisImg} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
