// import Image from "next/image";
"use server"
import Link from "next/link";

import OpenAI from "openai";
import { fetchData } from "./actions";
import SearchBar from "@/components/SearchBar";

const openai = new OpenAI({
  apiKey:process.env.NEXT_PUBLIC_OPEN_API_KEY,
  dangerouslyAllowBrowser: true
});

async function genEmail(summary:string,lead_gen=true) {
  console.log(summary);
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a bank sales agent. Using the provided financial news about an organization, deducing the financial health and requirements of the organization, write an email prompt to sell them a corporate loan to cater their requirements." },{
      role:"user",
      content:summary,
    }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

const Home=async () => {

  return (
    <div>
      <h1>EWS & LEAD One </h1>
      <SearchBar />
    </div>
  );
}

export default Home;