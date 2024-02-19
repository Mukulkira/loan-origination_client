

import { Button, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { fetchData } from "../actions";
import Link from "next/link";
import EmailPrompt from "@/components/EmailPrompt";
import Carousel from "@/components/Carousel";
import Articles from "@/components/Articles";
import Floating from "@/components/Floating";

export default async function Page({ params }: { params: { id: string } }) {
    const company_code = params.id;
    const articles = await fetchData(company_code);
    return (
        <div style={{
            padding:"2rem",
            justifyContent:'space-around',
            marginBottom:'5rem',
            // width:'100vw',
        }}>
            <Articles articles={articles} />
            {/* <Typography variant="h3">Early Warning News :</Typography>

            <EmailPrompt articles={articles.negative_articles} lead_gen={false} />
            <Grid container spacing={2}>
                {articles?.negative_articles?.map((article: Article, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="article-card" key={index} sx={{ maxWidth: 345 }}>

                                <CardMedia
                                    component="img"
                                    alt="Article Image"
                                    height="300"
                                    width="256"
                                    image={article.image?.toString() || "azentio.jpg"}
                                />
                                <CardContent>
                                    <Typography variant="h6">Headline:</Typography>
                                    <Typography>{article.headline}</Typography>
                                    <Typography variant="h6">Summary:</Typography>
                                    <Typography>{article.summary}</Typography>
                                    <Link href={article.url?.toString() || ""} style={{
                                        textDecoration:'none',
                                        outline:'none',
                                    }} target="blank">Read more...</Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid> */}
            {/* <Carousel /> */}
            <Floating />
        </div>
    )
}