"use client";

import { Button } from "@mui/material";
import OpenAI from "openai";
import { useState } from "react";
import copy from "clipboard-copy"
import toast from "react-hot-toast";
import AlertDialog from "./Prompt";

type Props = {
    lead_gen: boolean,
    articles: [Article],
}

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
    dangerouslyAllowBrowser: true
});

async function genEmail(summary: string, lead_gen = true) {
    const leadGen="You are a bank sales agent. Using the provided financial news about an organization, deducing the financial health and requirements of the organization, write an email prompt to sell them a corporate loan to cater their requirements.";
    const ewsGen="You are a bank ealry warning system. Using the provided financial news about an organization, deducing the financial health and requirements of the organization, write a summary for bank employees about the financial condition of the organization and warn them if they need to."
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: lead_gen?leadGen:ewsGen }, {
            role: "user",
            content: summary,
        }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message);


    //return the email message so it can be displayed
    return completion.choices[0].message.content;
}

export default function EmailPrompt({ articles, lead_gen }: Props) {
    const [promptData, setPromptData] = useState<string>("");

    console.log("promptData: ",promptData);

    const onSubmit = async () => {
        // Concatenate all summaries into a single string
        const allSummaries = articles.reduce((acc: string, article: Article) => {
            return acc + article.summary + '\n'; // You can adjust the format as needed
        }, '');
        if (lead_gen) {
            // console.log(articles.data.positive_articles[0]);
            // await genEmail(allSummaries);
            // console.log(allSummaries);
            const loadingId=toast.loading("Generating Email Prompt... Please Wait");
            const emailPrompt = await genEmail(allSummaries);
            // convert /n to <br/>
            toast.success("Here you have it",{
                id:loadingId,
            })
            setPromptData(emailPrompt || "");
        } else {
            const loadingId=toast.loading("Generating Summary... Please Wait");
            const emailPrompt = await genEmail(allSummaries);
            toast.success("Here you have it",{
                id:loadingId,
            })
            setPromptData(emailPrompt || "");
        }
    };
    
    return (
        <div>
            <Button variant="contained" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-500 hover:to-yellow-500"  onClick={onSubmit}>
                {lead_gen ? "Generate Prompt for Lead Generation" : "Email Prompt for Early Warning:"}
            </Button>
            <br /><br />
            {promptData!=="" && (
                // <div>
                //     <textarea
                //         readOnly
                //         value={promptData}
                //         style={{ width: "100%", height: "200px" }}
                //     />
                //     <Button variant="contained" onClick={handleCopy}>Copy Prompt</Button>
                // </div>
                <AlertDialog content={promptData} setPromptData={setPromptData} />
            )}
        </div>
    )
}