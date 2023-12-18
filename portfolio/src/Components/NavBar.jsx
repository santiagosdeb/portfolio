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
// import CV from "../assets/SanchezdeBustamanteResume.pdf";
import CV from "../assets/CV-SanchezdeBustamanteSantiago.pdf";
import logoTransparente from "../assets/SdeBLogoTransparente.png";
import { Link } from "react-scroll";
import us from '../assets/us.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center bg-[#0a192f] text-gray-300 px-4 z-10">
      <div>
      <Link to="home" smooth={true} duration={500}>
        <img
          src={logoTransparente}
          alt="Logo"
          className={nav ? "hidden" : "w-[110px] md:w-[130px] 2xl:w-[200px]"}
        />
      </Link>
      </div>

      {/* Pages */}
      <ul className="hidden md:flex">
        <li className="mx-4 cursor-pointer text-lg hover:underline hover:decoration-pink-600 hover:decoration-2">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mx-4 cursor-pointer text-lg hover:underline hover:decoration-pink-600 hover:decoration-2">
        <Link to="skills" smooth={true} duration={500} activeClass="underline">
          Skills
        </Link>
        </li>
        <li className="mx-4 cursor-pointer text-lg hover:underline hover:decoration-pink-600 hover:decoration-2">
        <Link to="projects" smooth={true} duration={500} activeClass="underline">
          Projects
        </Link>
        </li>
        <li className="mx-4 cursor-pointer text-lg hover:underline hover:decoration-pink-600 hover:decoration-2">
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>
      {/* Pages */}

      <div
        className="md:hidden z-10 mr-4 cursor-pointer"
        onClick={() => setNav(!nav)}
      >
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
        <li className="my-6 text-4xl cursor-pointer hover:underline hover:decoration-pink-600 hover:decoration-2">
          <Link to="home" smooth={true} duration={500} onClick={() => setNav(false)}>
            Home
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer hover:underline hover:decoration-pink-600 hover:decoration-2">
          <Link to="skills" smooth={true} duration={500} onClick={() => setNav(false)}>
            Skills
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer hover:underline hover:decoration-pink-600 hover:decoration-2">
          <Link to="projects" smooth={true} duration={500} onClick={() => setNav(false)}>
            Projects
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer hover:underline hover:decoration-pink-600 hover:decoration-2">
          <Link to="contact" smooth={true} duration={500} onClick={() => setNav(false)}>
            Contact
          </Link>
        </li>

        <div className="w-full fixed bottom-0 pb-4">
          <ul className="flex w-full justify-around">
            <li className="flex justify-center items-center bg-blue-600 p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/santiago-a-sanchez-de-bustamante-9116531a2/"
                target="_blank"
              >
                <FaLinkedin size={45} />
              </a>
            </li>

            <li className="flex justify-between items-center bg-[#333333] p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl">
              <a
                className="flex justify-between items-center w-full text-gray-300 duration-300"
                href="https://github.com/santiagosdeb"
                target="_blank"
              >
                <FaGithub size={45} />
              </a>
            </li>

            <li className="flex justify-between items-center bg-red-500 p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl">
              <a
                className="flex justify-between items-center w-full text-gray-300 duration-300"
                href="mailto:santiagosanchezdeb@gmail.com"
                // aca puedo meter un link a la seccion "Contact"
                target="_blank"
              >
                <HiOutlineMail size={45} />
              </a>
            </li>

            <li className="flex justify-between items-center bg-green-500 p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl">
              <a
                className="flex justify-between items-center w-full text-gray-300 duration-300"
                href="https://wa.me/message/4VBSTH54ZKIAD1"
                target="_blank"
              >
                <FaWhatsapp size={45} />
              </a>
            </li>

            <li className="flex justify-between items-center bg-[#565f69] p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl">
              <a
                className="flex justify-between items-center w-full text-gray-300 duration-300"
                href={CV}
                target="_blank"
              >
                <FaFileAlt size={45} />
              </a>
            </li>
          </ul>
        </div>
      </ul>
      {/* Menu on smaller devices */}


      {/* Social Media */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] flex justify-between items-center bg-blue-600 p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl my-[4px] ml-[-100px] hover:ml-[-10px]">
            <a className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="https://www.linkedin.com/in/santiago-a-sanchez-de-bustamante-9116531a2/"
              target="_blank"
            >
                <span className={`flex items-center justify-center px-5 font-bold text-gray-300 duration-300`}>
                  Linkedin
                </span>
              <FaLinkedin size={32} />
            </a>
          </li>

          <li className="w-[160px] flex justify-between items-center bg-[#333333] p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl my-[4px] ml-[-100px] hover:ml-[-10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="https://github.com/santiagosdeb"
              target="_blank"
            >   
                <span className={`flex items-center justify-center px-5 font-bold text-gray-300 duration-300`}>
                  Github
                </span>
              <FaGithub size={32} />
            </a>
          </li>

          <li className="w-[160px] flex justify-between items-center bg-red-500 p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl my-[4px] ml-[-100px] hover:ml-[-10px]">
            <Link to="contact" smooth={true} duration={500}
              className="flex justify-between items-center w-full text-gray-300 duration-300">
              
                <span className={`flex items-center justify-center px-5 font-bold text-gray-300 duration-300`}>
                  Email
                </span>
           
              <HiOutlineMail size={32} />
            </Link>
          </li>

          <li className="w-[160px] flex justify-between items-center bg-green-500 p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl my-[4px] ml-[-100px] hover:ml-[-10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href="https://wa.me/message/4VBSTH54ZKIAD1"
              target="_blank"
            >
              
                <span className={`flex items-center justify-center px-5 font-bold text-gray-300 duration-300 text-[14.5px]`}>
                  Whatsapp
                </span>
             
              <FaWhatsapp size={32} />
            </a>
          </li>
          
          <li className="w-[160px] flex justify-between items-center bg-[#565f69] p-2 cursor-pointer hover:scale-105 duration-300 rounded-xl my-[4px] ml-[-100px] hover:ml-[-10px]">
            <a
              className="flex justify-between items-center w-full text-gray-300 duration-300"
              href={CV}
              target="_blank"
            >
              
                <span className={`flex items-center justify-center px-5 font-bold text-gray-300 duration-300`}>
                  Resume
                </span>
              
              <FaFileAlt size={32} />
            </a>
          </li>
        </ul>
      </div>
      {/* Social Media */}

      {/* <div className="hidden md:flex fixed right-[2%] bottom-[5%]">
        <button style={{ backgroundImage: `url(${us})` }} className="w-[60px] h-[60px] bg-cover bg-no-repeat bg-center rounded-full"></button>
      </div> */}
      
    </div>
  );
};

export default NavBar;
