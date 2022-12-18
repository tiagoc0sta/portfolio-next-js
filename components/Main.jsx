import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='upepercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'> Chris</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            An UX Researcher
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I am specializing in building and design exceptional UI experiences. Currently, I am focused on building responsive web applications.          
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

          <div className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn/>
              </div>
              <div className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub/>
              </div>
              <div className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail/>
              </div>
              <div className='rounded-full shadow-lg shaddow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill/>
              </div>
            
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main;