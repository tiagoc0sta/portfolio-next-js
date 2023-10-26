import Image from 'next/image';
import React from 'react';
import ChrisImg from '../public/assets/chris.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#000000] font-bold py-4'>
            About
          </p>

          {/* Auto em amarelo se for necessário
          
          <blockquote>
            <span class='relative'>
              <span
                class='block absolute -inset-0 -skew-x-0 bg-[#feef38]'
                aria-hidden='true'
              ></span>
              <span className='relative uppercase text-xl tracking-widest text-[#000000] font-bold py-4'>
                About
              </span>
            </span>
          </blockquote> */}

          <p className='py-2 text-gray-600'>
            Hello, I&apos;m Chris Costa, a pharmacy graduate with ten years of
            experience in the field. In recent years, I focused on team
            management and process improvement at the major hospital in Espírito
            Santo, Brazil.
          </p>
          <br />
          <p>
            After a career break to prioritize my personal life, I came across
            UX research and realized it was already aligned with me. This
            journey led me to discover UX research while seeking new knowledge.
          </p>
          <br />
          <p>
            In 2021 I intensified my studies and joined as a UX Researcher at
            Entrega Farma, working on e-commerce products for medications.
            Later, at Fintech Creditas, I researched car and home equity loans,
            car insurance, car financing, and consigned loans, covering both B2B
            and B2C contexts.
          </p>
          <br />
          <p>
            Outside work, I enjoy engaging in playful activities and crafts and
            exploring parks.
          </p>
          <br />

          <Link
            href='/#projects'
            className='py-2 text-gray-600 underline cursor-pointer'
          >
            Check out some of my projects.
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
          <Image className='rounded-xl ' src={ChrisImg} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
