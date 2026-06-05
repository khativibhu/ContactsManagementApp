"use server";  //because we are creating server functions/ server actions

//import axios from "axios";
import { UserType } from "../_types/user";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/cookie";
import { getUsersByEmailAndPassword } from "../db/auth";

//const API_URL = "http://localhost:3001";

type LoginActionInputType = {
  email: string;
  password: string;
};

export const loginAction = async ({email, password}: LoginActionInputType) => {
  try{
    const response = await getUsersByEmailAndPassword( {
                                           email: email,
                                           password: password
                                           } );     //DB call
    
    const user:UserType | undefined = response;

    if(!user) throw new Error("Invalid Credentials");
    //set user in the cookies
    await setSession({name: user.name, email: user.email, id: user.id});

    return {success: true};
  }
  catch(error){
     if(error instanceof Error){
       throw error;
     }
  }
}

export const logoutAction = async () => {
    await deleteSession(); //it  logout our user
    redirect("/login");
}