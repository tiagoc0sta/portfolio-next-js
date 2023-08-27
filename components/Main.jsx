import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'></p>
          <h1 className='py-4 text-gray-700 text-5xl'>
            Hi! My name is<span className='text-[#5651e5]'> Chris Costa</span>
          </h1>
          <h1 className='py-2 text-gray-700 text-5xl'>I'm a UX Researcher</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Based in Canada, I help teams make research a habit and turn
            insights into actionable product improvements.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              href='https://www.linkedin.com/in/christtiane/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
            <a
              className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              href='https://github.com/Christtiane'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
            <a
              className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              href='mailto:christtianec@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineMail />
            </a>
            <a
              className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              href='https://drive.google.com/file/d/15U4nV-owRHf-TVUPV0ruhN8AjjsZx-d4/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
