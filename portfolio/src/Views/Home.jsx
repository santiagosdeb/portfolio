import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import CV from "../assets/SanchezdeBustamanteResume.pdf";

const Home = () => {
  const [showSpan, setShowSpan] = useState(false);

  return (
    <div className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Welcome! My name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Santiago Sanchez de Bustamante
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] underline decoration-pink-600">
          Full Stack Developer
        </h2>
        <p className="py-4 text-[#8892b0] max-w-[700px]">
          Aca podría llegar a ir algun texto de introduccion o contar algo sobre
          mi pero no se como quedaria y ahora tengo que agregar boludeces para ver como queda
        </p>
      </div>
      
    </div>
  );
};

export default Home;
