"use client";
import axios from 'axios';
import React from 'react'
import { SubmitHandler, useForm} from 'react-hook-form'


type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};


export default function RegisterForm() {
   
   const {register, handleSubmit, reset} = useForm<RegisterFormData>();
  
   const handleRegister: SubmitHandler<RegisterFormData> = async(data: any) => {
    console.log(data.name);
    console.log(data.email);
    const res = await axios.post("http://localhost:3000/register/db", data);  //API call

    console.log(res);
    reset();
  }  

  return (
    <form  onSubmit={handleSubmit(handleRegister)} className="space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              {...register("name")}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
               />
          </div>
    
          <div className='mt-3'>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              {...register("email")}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
               />
          </div>
          
          <div className='mt-3'>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          {...register("password")}
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
           />
      </div>

          <button type="submit" 
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
  )
}
