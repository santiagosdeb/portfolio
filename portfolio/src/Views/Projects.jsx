import React, { useContext, useEffect } from "react";
import Context from "../context/context";
import style from "../styles.module.css";

const Projects = () => {
  const { getProjects, projects } = useContext(Context);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-[65px]"
      name="projects"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="my-4">
          <p className="text-4xl font-bold inline underline decoration-pink-600 decoration-4 text-gray-300">
            Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, key) => {
            const bg = project.image;

            return (
              <div
                key={key}
                style={{ backgroundImage: `url(${bg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] overflow-hidden"
              >
                <div
                  className="opacity-0 group-hover:opacity-100 h-full w-[90%]"
                  key={project.id}
                >
                  <h2 className="text-3xl font-bold text-white mb-4 text-center">
                    {project.title}
                  </h2>
                  <div className="max-h-[130px] overflow-y-auto scrollbar-project">
                    <p>{project.description}</p>
                  </div>
                  <div className="flex justify-around gap-4">
                    <a href={project.links[0].CODE} target="_blank">
                      {" "}
                      <button className="flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 rounded-md">
                        CODE
                      </button>{" "}
                    </a>
                    <a href={project.links[0].VIDEO} target="_blank">
                      {" "}
                      <button className="flex items-center text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 rounded-md">
                        VIDEO
                      </button>{" "}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
