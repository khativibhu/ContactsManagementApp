"use server";  //because we are creating server functions/ server actions

import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/cookie";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try{
    const response = await axios.get(`${API_URL}/users`, {
                                    params: {
                                           email: formData.get("email"),
                                           password: formData.get("password")
                                           } 
   });
    
    const user:UserType | undefined = response.data[0];

    if(!user) throw new Error("Invalid Credentials");
    //set user in the cookies
    await setSession({name: user.name, email: user.email, id: user.id});

    redirect("/contact");
  }
  catch(err){
     if(err instanceof Error){
       throw err;
     }
     throw new Error("Failed to login");
  }
}

export const logoutAction = async () => {
    await deleteSession(); //it  logout our user
    redirect("/login");
}