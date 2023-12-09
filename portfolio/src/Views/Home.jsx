import React, { useState } from "react";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [showSpan, setShowSpan] = useState(false);

  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-xl">Welcome! My name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Santiago Sanchez de Bustamante
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] underline decoration-[3px] decoration-pink-600">
          Full Stack Developer
        </h2>
        <p className="py-4 text-[#8892b0] max-w-[700px]">
          Focused on solving problems with creativity, and continuously seeking
          to expand my skills in this area. I find inspiration in complex
          challenges, leveraging my expertise in web and application development
          to handle them effectively.
        </p>
        {/* Enfocado en resolver problemas con creatividad, y buscando continuamente ampliar mis 
        habilidades en esta área. Encuentro inspiración en desafíos complejos, aprovechando mi
        experiencia en desarrollo web y de aplicaciones para manejarlos de manera efectiva.*/}

        <div>
          
            {/* <button className="flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 group rounded-md"> */}
            <Link to="skills" smooth={true} duration={500} className="flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 group rounded-md w-[160px] cursor-pointer">
              View More{" "}
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <HiArrowNarrowRight className="ml-2" />{" "}
              </span>
            </Link>
            {/* </button> */}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
