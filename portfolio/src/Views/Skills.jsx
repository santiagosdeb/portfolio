import React, { useEffect, useContext } from 'react';
import Context from '../context/context';

const Skills = () => {

    const { getSkills, skills } = useContext(Context);

    useEffect(() => {
        getSkills();
    }, []);

  return (
    <div className='w-full h-full bg-[#0a192f] text-gray-300 pt-[65px]' name="skills">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='my-4'>
                <h2 className='text-4xl font-bold inline underline decoration-pink-600 decoration-4'>Skills</h2>
            </div>
        
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                {skills.map((skill) => (
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 ease-in-out' key={skill._id}>
                        <img src={skill.image} alt='Logos' className={skill.smallImage ? 'w-40 mx-auto my-2' : 'w-20 mx-auto my-2'} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default Skills

// #d10070