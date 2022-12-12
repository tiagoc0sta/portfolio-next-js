
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='txt-xl tracking-widest uppercase text-[#5651e5] font-bold'>Contact</p>
        <h2 className='py-4'>Get in touch</h2>
        <div className='grid lg:grid cols-5 gap-8'>
        {/*Left*/}
        <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='lg:p-4 h-full'>
            <div>
              <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/"/>
            </div>
            <div>
              <h2 className='py-2'>Name</h2>
              <p>UX Researcher</p>
              <p>I am available for freelance or full-time positions. Contact
                  me and let's talk.</p>
            </div>
            <div>
            <p className='uppercase pt-8'>Connect with me</p>
            <div className='flex itmes-center justify-between py-4'>
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

        {/*Right*/}
        </div>
      </div>
    </div>
  )
}

export default Contact