// import Image from "next/image";
"use server"
import Link from "next/link";

import OpenAI from "openai";
import { fetchData } from "./actions";

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

  // const [articles,setArticles]=useState<ArticlesType>();

  const articles = await fetchData();
  // console.log(data);
  // useEffect(() => {
  //   const getData=async () => {
  //     const res = await fetch('api/');
  //     const articles = await res.json()
  //     setArticles(articles.data);
  //     // // Concatenate all summaries into a single string
  //     // const allSummaries = articles.data.positive_articles.reduce((acc:string, article:Article) => {
  //     //   return acc + article.summary + '\n'; // You can adjust the format as needed
  //     // }, '');
  //     // // console.log(articles.data.positive_articles[0]);
  //     // genEmail(allSummaries);
  //   }
  //   getData();
  // },[]);

  // const genPrompt=async function(articles?:[Article],lead_gen=true){
  //   if(articles===undefined){
  //     return ;
  //   }
  //   // Concatenate all summaries into a single string
  //   const allSummaries = articles.reduce((acc:string, article:Article) => {
  //     return acc + article.summary + '\n'; // You can adjust the format as needed
  //   }, '');
  //   // console.log(articles.data.positive_articles[0]);
  //   genEmail(allSummaries);
  // }

  const SubmitPrompt=async (formData:FormData) => {
    "use server";
    const feature=formData?.get('feature');
    if(feature==="lead"){
      // Concatenate all summaries into a single string
      const allSummaries = articles.positive_articles.reduce((acc:string, article:Article) => {
        return acc + article.summary + '\n'; // You can adjust the format as needed
      }, '');
      // console.log(articles.data.positive_articles[0]);
      await genEmail(allSummaries);
    }else{

    }
  }


  return (
    <div>
      <p>Positive articles:</p>
      <p>Email Prompt for Early Warning:</p>
      <form action={SubmitPrompt}>
        <input type="hidden" value="lead" name="feature" />
        <button type="submit" className="border bg-green rounded-lg py-2 m-2 text-decoration-none">Generate Prompt</button>
      </form>
      {/* <div onClick={() => genPrompt(articles?.positive_articles)}>Generate the prompt</div> */}

      <p>Email Prompt for Early Warning:</p>
    </div>
  );
}

export default Home;