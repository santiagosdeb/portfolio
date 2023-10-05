import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import CV from "../assets/SanchezdeBustamanteResume.pdf";

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
          Aca podría llegar a ir algun texto de introduccion o contar algo sobre
          mi pero no se como quedaria y ahora tengo que agregar boludeces para ver como queda. Booooooocaaa boccaaaaa bo oo oooooo ooocaaaaaaaaaaaaaaaaa boca boca boca boca boca 2 palmeiras 0
        </p>

        <div>
          <button className="flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 group">
            View More <span className="group-hover:rotate-90 duration-300"> <HiArrowNarrowRight className="ml-2"/> </span>
          </button>
        </div>

      </div>
      
    </div>
  );
};

export default Home;
