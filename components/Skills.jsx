import Image from 'next/image';
import React from 'react';

import Miro from '../public/assets/skills/miro.png';
import Maze from '../public/assets/skills/maze.png';
import Jira from '../public/assets/skills/jira.png';
import Confluence from '../public/assets/skills/confluence.png';
import Figma from '../public/assets/skills/figma.png';
import Sql from '../public/assets/skills/sql.png';
import SurveyMonkey from '../public/assets/skills/surveymonkey.png';
import Hotjar from '../public/assets/skills/hotjar.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#000000] font-bold py-4'>
          Skills
        </p>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Miro} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Miro</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center mt-6'>
              <div className='m-auto'>
                <Image src={Maze} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Maze</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={SurveyMonkey} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Survey Monkey</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className=' grid grid-cols-2 gap-4 justify-center items-center '>
              <div className='m-auto'>
                <Image src={Hotjar} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Hotjar</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Figma} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Sql} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sql</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Jira} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Jira</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Confluence} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Confluence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
