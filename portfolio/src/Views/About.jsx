import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#d10070]">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, my name is Santiago, I need to add some text to probe my about page and how it works having more words</p>
          </div>
          <div>
            We will be starting off in VS code creating our React App,
            installing and configuring Tailwind CSS and then build out each
            component in the portfolio. We will be using getform.io for a
            functional form to submit messages with automation! How cool is
            that!? Hope you guys like it!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
