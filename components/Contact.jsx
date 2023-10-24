import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill, BsMedium } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-20 w-full '>
        <p className='uppercase text-xl tracking-widest text-[#000000] font-bold py-4'>
          Contact
        </p>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Chris Costa</h2>
                <p>UX Researcher</p>
              </div>
              <div>
                <p className='pt-20'>Let&apos;s talk!</p>
                <div className='flex items-center justify-between py-4'>
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

          {/*Right*/}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/7ca3fda7-c1f0-4c34-b201-6807d0e21b1d'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>

                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='4'
                    name='textArea'
                  ></textarea>
                </div>
                <button class='w-full p-4 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#000000]' size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
