import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest){
    const res = await fetch('http://127.0.0.1:8000/api/predict/', {
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        "company_name":"AAPL",
    }),
    method:"POST",
  })
  const data = await res.json()
//   console.log(data);
 
  return NextResponse.json({ data })
}