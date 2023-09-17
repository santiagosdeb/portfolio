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
import CV from "../assets/SanchezdeBustamanteResume.pdf"
import logo2 from "../assets/SdeBlogo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showSpan, setShowSpan] = useState(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300 px-4">
      <div>
        <img
          src={logo2}
          alt="Logo"
          className={nav ? "hidden" : "w-[110px] md:w-[130px] 2xl:w-[200px]"}
        />
      </div>

      <ul className="hidden md:flex">
        <li className="mx-4 cursor-pointer text-[17px] hover:underline hover:decoration-pink-600">Home</li> 
        <li className="mx-4 cursor-pointer text-[17px] hover:underline hover:decoration-pink-600">Skills</li>
        <li className="mx-4 cursor-pointer text-[17px] hover:underline hover:decoration-pink-600">Projects</li>
        <li className="mx-4 cursor-pointer text-[17px] hover:underline hover:decoration-pink-600">Contact</li>
      </ul>

      
      <div className="md:hidden z-10 mr-4 cursor-pointer" onClick={() => setNav(!nav)}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu on smaller devices */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="my-6 text-4xl cursor-pointer"> Home </li>
        <li className="my-6 text-4xl cursor-pointer"> Skills </li>
        <li className="my-6 text-4xl cursor-pointer"> Projects </li>
        <li className="my-6 text-4xl cursor-pointer"> Contact </li>
      </ul>
      {/* Menu on smaller devices */}
      
      {/* Social Media */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul
          onMouseEnter={() => setShowSpan(true)}
          onMouseLeave={() => setShowSpan(false)}
        >

          <li className="flex justify-between items-center bg-blue-600 p-2 cursor-pointer hover:scale-105 duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="https://www.linkedin.com/in/santiago-a-sanchez-de-bustamante-9116531a2/"
              target="_blank"
            >
              {showSpan && (
                <span className="flex items-center justify-center px-5 font-bold text-gray-300 duration-300">
                  Linkedin
                </span>
              )}
              <FaLinkedin size={32} />
            </a>
          </li>

          <li className="flex justify-between items-center bg-[#333333] p-2 cursor-pointer hover:scale-105 duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="https://github.com/santiagosdeb"
              target="_blank"
            >
              {showSpan && (
                <span className="flex items-center justify-center px-5 font-bold text-gray-300 duration-300">
                  Github
                </span>
              )}
              <FaGithub size={32} />
            </a>
          </li>

          <li className="flex justify-between items-center bg-red-500 p-2 cursor-pointer hover:scale-105 duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="mailto:santiagosanchezdeb@gmail.com"
              // aca puedo meter un link a la seccion "Contact"
              target="_blank"
            >
              {showSpan && (
                <span className="flex items-center justify-center px-5 font-bold text-gray-300 duration-300">
                  Email
                </span>
              )}
              <HiOutlineMail size={32} />
            </a>
          </li>

          <li className="flex justify-between items-center bg-green-500 p-2 cursor-pointer hover:scale-105 duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="https://wa.me/message/4VBSTH54ZKIAD1"
              target="_blank"
            >
              {showSpan && (
                <span className="flex items-center justify-center px-5 font-bold text-gray-300 duration-300">
                  Whatsapp
                </span>
              )}
              <FaWhatsapp size={32} />
            </a>
          </li>

          <li className="flex justify-between items-center bg-[#565f69] p-2 cursor-pointer hover:scale-105 duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href={CV}
              target="_blank"
            >
              {showSpan && (
                <span className="flex items-center justify-center px-5 text-gray-300 duration-300">
                  Resume
                </span>
              )}
              <FaFileAlt size={32} />
            </a>
          </li>
        </ul>
      </div>
      {/* Social Media */}

    </div>
  );
};

export default NavBar;
