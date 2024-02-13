

import { Button, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { fetchData } from "../actions";
import Link from "next/link";
import EmailPrompt from "@/components/EmailPrompt";

export default async function Page({ params }: { params: { id: string } }) {
    const company_code = params.id;
    const articles = await fetchData(company_code);
    return (
        <div>
            <Typography variant="h3">Positive articles:</Typography>
            
            <EmailPrompt articles={articles.positive_articles} lead_gen={true} />


            {/* <form action={SubmitPrompt}>
    <Button/>
      <input type="hidden" value="lead" name="feature" /> */}
            <Grid container spacing={2}>
                {articles?.positive_articles?.map((article: Article, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="article-card" key={index} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="Articleimage"
                                    height="300"

                                    image={article.image?.toString() || ""}
                                />
                                <CardContent>
                                    <Typography variant="h6">Headline:</Typography>
                                    <Typography>{article.headline}</Typography>
                                    <Typography variant="h6">Summary:</Typography>
                                    <Typography>{article.summary}</Typography>
                                    {/* <image src={article.image?.toString() || ""} alt="Article image" height={256} width={256} /> */}
                                    <Link href={article.url?.toString() || ""}>Follow for the article</Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>

            <Typography variant="h3">Negative Articles:</Typography>

            <EmailPrompt articles={articles.negative_articles} lead_gen={false} />
            <Grid container spacing={2}>
                {articles?.negative_articles?.map((article: Article, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="article-card" key={index} sx={{ maxWidth: 345 }}>

                                <CardMedia
                                    component="img"
                                    alt="Articleimage"
                                    height="300"
                                    width="256"
                                    image={article.image?.toString() || ""}
                                />
                                <CardContent>
                                    <Typography variant="h6">Headline:</Typography>
                                    <Typography>{article.headline}</Typography>
                                    <Typography variant="h6">Summary:</Typography>
                                    <Typography>{article.summary}</Typography>
                                    {/* <image src={article.image?.toString() || ""} alt="Article image" height={256} width={256} /> */}
                                    <Link aria-description="Follow the link to redirect to the article" href={article.url?.toString() || ""}>Follow for the article</Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            {/* </form> */}
            {/* <div onClick={() => genPrompt(articles?.positive_articles)}>Generate the prompt</div> */}

        </div>
    )
}