import React from "react";
import FoodRecipe from "../assets/FoodRecipes.png";
import Videogames from "../assets/Videogames.png";

const Projects = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        
        <div className="my-4">
          <p className="text-4xl font-bold inline underline decoration-pink-600 decoration-4 text-gray-300">
            Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div style={{backgroundImage: `url(${FoodRecipe})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
          items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span>
                <h2 className="text-red-500 text-center">FOOD RECIPES</h2>
              </span>
              <div>
                <a href="/">
                  <button className="text-black p-4">CODE</button>
                </a>
                <a href="/">
                  <button className="text-black p-4">VIDEO</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Videogames})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
          items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span>
                  <h2 className="text-red-500 text-center">SPORT PLANET</h2>
                </span>
                <a href="/">
                  <button className="text-black p-4">CODE</button>
                </a>
                <a href="/">
                  <button className="text-black p-4">VIDEO</button>
                </a>
            </div>
          </div>

          <div style={{backgroundImage: `url(${FoodRecipe})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
          items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span>
                <h2 className="text-red-500 text-center">Videogames</h2>
              </span>
              <div>
                <a href="/">
                  <button className="text-black p-4">CODE</button>
                </a>
                <a href="/">
                  <button className="text-black p-4">VIDEO</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage: `url(${Videogames})`}} 
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
          items-center mx-auto content-div">
            <div className="opacity-0 group-hover:opacity-100">
              <span>
                <h2 className="text-red-500 text-center">Avengers</h2>
              </span>
              <div>
                <a href="/">
                  <button className="text-black p-4">CODE</button>
                </a>
                <a href="/">
                  <button className="text-black p-4">VIDEO</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
