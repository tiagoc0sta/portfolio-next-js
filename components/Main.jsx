import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsMedium } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <blockquote>
            <p className='upepercase text-sm tracking-widest text-gray-600'></p>
            <h1 className='py-4 text-black '>
              Hi, I am
              <span class='relative'>
                <span
                  class='block absolute -inset-0 -skew-y-2 bg-[#feef38]'
                  aria-hidden='true'
                ></span>
                <span className='relative text-[#050505]'>Chris</span>
              </span>
            </h1>
          </blockquote>

          <h1 className='py-2 text-black'>UX Researcher</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I am specialized in building and designing exceptional UX
            experiences. Currently, I am focused on building responsive web
            applications.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              className=' rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '
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
              href='https://drive.google.com/file/d/11XePWqBzBkdiic6Unms_IfQYdcBpUZg2/view?usp=drive_link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsFillPersonLinesFill />
            </a>

            <a
              className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
              href='https://medium.com/@christtiane'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsMedium />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
