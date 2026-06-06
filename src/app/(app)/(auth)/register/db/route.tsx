//import axios from 'axios';
import { usersTable } from '@/db/schema';
import db from '@/index';
import { NextResponse } from 'next/server'

/*
export const GET = (request: Request) => {
  return NextResponse.json({
    message: "Hello, this is api route",
    success: true,
  });
}
 */

//const API_URL = "http://localhost:3001";

export const POST = async (request: Request) => {

  try{
    const data = await request.json();
    console.log(data);
    console.log(data.name);
    console.log(data.email);

    if(!data.name || !data.email || !data.password) {
      return NextResponse.json(
        {success: false, error: "All fields are required"}, 
        {status: 400} );
    }

    const res = await db.insert(usersTable).values(data);

   return NextResponse.json(
          {success: true, data: res},
          {status: 201}
          );
    }
    catch(error){
      console.log(error);
      return NextResponse.json(
        {success: false, error: "Failed to register user"}, 
        {status: 500}
      );
    }      

} 
