"use client";
import { useState } from 'react';
import { loginAction } from '../actions/auth';
import {useRouter} from "next/navigation";

export default function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
     event.preventDefault();
     
     try{
        const response = await loginAction( {email: email, password: password} );
    
        if(response?.success) {
           router.push("/contact");
        } 

     } catch(error){
       console.log(error);
       //alert(error);
       setErrorMsg(error instanceof Error && error.message.includes("Invalid Credentials") ? error.message : "Something went wrong!");
       setTimeout(() => window.location.reload(), 500);
     }

  }

  return (
    <form onSubmit= {handleSubmit} className="space-x-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          name="email"
          value={email} 
          onChange = {(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
           />
      </div>

      <div className='mt-3'>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          name="password"
          value={password}
          onChange= {(e)=> setPassword(e.target.value) }
          placeholder="Enter your password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
           />
      </div>
       
      {errorMsg && (<p className="text-red-500 text-center mt-2">{errorMsg}</p>) }

      <button type="submit" className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-solid">
        Login
      </button>

    </form>
  )
}
