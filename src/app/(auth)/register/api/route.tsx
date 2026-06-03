import axios from 'axios';
import { NextResponse } from 'next/server'

/*
export const GET = (request: Request) => {
  return NextResponse.json({
    message: "Hello, this is api route",
    success: true,
  });
}
 */

const API_URL = "http://localhost:3001";

export const POST = async (request: Request) => {
    const data = await request.json();
    console.log(data);
    console.log(data.email);
    console.log(data.name);
    const res = await axios.post(`${API_URL}/users`, data);

   return NextResponse.json(res.data);

} 
