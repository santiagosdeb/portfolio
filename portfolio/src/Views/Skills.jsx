import React from 'react'

import CSS from '../assets/css.png'
import HTML from '../assets/html.png'
import Javascript from '../assets/javascript.png'
import NodeJS from '../assets/node.png'
import Reactlogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Redux from '../assets/redux.png'
import PostgreSQL from '../assets/postgresql.png'
import MongoDB from '../assets/mongo.png'
import Express from '../assets/express.png'

const Skills = () => {
  return (
    <div className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='my-4'>
                <p className='text-4xl font-bold inline underline decoration-pink-600 decoration-4'>Skills</p>
            </div>
        
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={HTML} alt='HTML logo' className='w-20 mx-auto my-2' />
                    <p>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={CSS} alt='CSS logo' className='w-20 mx-auto my-2' />
                    <p>CSS</p>
                </div>


                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={Javascript} alt='Javascript logo' className='w-20 mx-auto my-2' />
                    <p>Javascript</p>
                </div>


                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={Reactlogo} alt='React logo' className='w-20 mx-auto my-2' />
                    <p>ReactJS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={Reactlogo} alt='React logo' className='w-20 mx-auto my-2' />
                    <p>React Native</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={Tailwind} alt='Tailwind logo' className='w-20 mx-auto my-2' />
                    <p>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={Redux} alt='Redux logo' className='w-20 mx-auto my-2' />
                    <p>Redux</p>
                </div>


                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={NodeJS} alt='NodeJS logo' className='w-20 mx-auto my-2' />
                    <p>NodeJS</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={Express} alt='Express logo' className='w-20 mx-auto my-2' />
                    <p>Express</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={PostgreSQL} alt='PostgreSQL logo' className='w-20 mx-auto my-2' />
                    <p>PostgreSQL</p>
                </div>
                
                {/* aca tengo q meterle 3 ma */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={MongoDB} alt='MongoDB logo' className='w-20 mx-auto my-2' />
                    <p>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out'>
                    <img src={PostgreSQL} alt='PostgreSQL logo' className='w-20 mx-auto my-2' />
                    <p>Sequelize? github?</p>
                </div>
                {/* aca tengo q meterle 3 ma */}
               

            </div>
        </div>
    </div>
  )
};

export default Skills

// #d10070