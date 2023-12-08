import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import style from '../styles.module.css'

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
      <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center py-[65px]" name="contact">
        <div className="flex flex-col max-w-[1000px] w-full px-4">

        <form className="flex flex-col max-w-[600px] w-[80%] shadow-lg shadow-[#040c16] mx-auto p-6 text-center" action="https://getform.io/f/04cbbda3-ff90-4bf5-8b99-820187e59c7c" method="POST" >
        
        <div className="my-8 mx-auto">
          <h2 className="text-4xl font-bold inline text-gray-300 underline decoration-pink-600 decoration-4">
            Contact
          </h2>
        </div>

          <div className={style.formContainer}>

          <div className={style.formGroup}>
            <input type="text" id="name" className={style.formInput} autocomplete="off" placeholder=" " {...register('name', {
              required: true,
            })}/>
            <label className={style.formLabel} for="name">Name</label>
            <span className={style.spanLabel}></span>
            {errors.nombre?.type === 'required' && <p>Your name is required</p>}
          </div>

          <div className={style.formGroup}>
            <input type="email" id="email" className={style.formInput} autocomplete="off" placeholder=" " {...register('email', {
              required: true,
              pattern: /\S+@\S+\.\S+$/i
            })}/>
            <label className={style.formLabel} for="email">Email</label>
            <span className={style.spanLabel}></span>
            {errors.email?.type === 'required' && <p>Your email is required</p>}
            {errors.email?.type === 'pattern' && <p>Please enter a correct email</p>}
          </div>

          <div className={style.formGroup}>
            <input type="text" id="message" className={style.formInput} autocomplete="off" placeholder=" " {...register('message', {
              required: true
            })}/>
            <label className={style.formLabel} for="message">Message</label>
            <span className={style.spanLabel}></span>
            {errors.message?.type === 'required' && <p>Your message is required</p>}
          </div>

          <button type="submit" className="text-white border-2 hover:bg-[#d10070] hover:border-[#d10070] px-6 py-3 my-8 mx-auto flex items-center rounded-md">Send Message</button>
          </div>
        </form>
      </div>
      </div>
    )
 };

export default Contact;
