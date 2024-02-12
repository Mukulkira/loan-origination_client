"use client";
import { useEffect, useState } from "react";
import { ButtonComponent } from "./Button";

export default async function Home() {

  const [articles,setArticles]=useState([]);

  // const res = await fetch('http://127.0.0.1:8000/api/predict/', {
  //   headers:{
  //       'Content-Type':'application/json',
  //   },
  //   body:JSON.stringify({
  //       "company_name":"AAPL",
  //   }),
  //   method:"POST",
  // })
  // const articles = await res.json()
  // console.log(data);
  useEffect(() => {
    const getData=async () => {
      const res = await fetch('http://127.0.0.1:8000/api/predict/', {
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            "company_name":"AAPL",
        }),
        method:"POST",
      })
      const articles = await res.json()
      console.log("articles after fetching:",articles);
      setArticles(articles.data.positive_articles);
    }
    getData();
  },[]);

  console.log("articles:",articles);

  return (
    <div>
      Positive articles:
      {/* {positive_articles} */}
      <ButtonComponent />
      Negative articles:
      {/* {negative_articles}  */}
      {articles}
    </div>
  );
}
