import React, { useEffect, useState } from "react";

const Contact = () => {

  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  })

  const changeHandler = (e) => {
    setInfo(({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setInfo({ 
      name: "",
      email: "",
      message: "",})
  },[])

  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center pt-[65px]" name="contact">
      <form
        className="flex flex-col max-w-[600px] w-full"
        action="https://getform.io/f/04cbbda3-ff90-4bf5-8b99-820187e59c7c"
        method="POST"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-[#d10070]">
            Contact
          </p>
        </div>
        <input
          type="text"
          name="name"
          className="p-2 bg-[#ccd6f6]"
          placeholder="Name"
          value={info.name}
          onChange={changeHandler}
        />
        <input
          type="email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
          placeholder="Email"
          value={info.email}
          onChange={changeHandler}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows="10"
          className="bg-[#ccd6f6] p-2"
          value={info.message}
          onChange={changeHandler}
        />
        <button className="text-white border-2 hover:bg-[#d10070] hover:border-[#d10070] px-6 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
