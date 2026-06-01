"use client";
import React from 'react'
import { logoutAction } from '../actions/auth'
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async() => {
    try{
    await logoutAction();
    //The redirect happens in the server action
    //This client-side redirect is a fallback
    //redirect("/login");
    router.push("/login");  //this works only in client side unlike redirect which works on both client and server side.
    router.refresh();
    }
    catch(error){
      console.log("Logout failed:", error);
    }
  }

  return (
    <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer">
      Logout
    </button>
  );
}
