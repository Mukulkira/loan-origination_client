"use client";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import EmailPrompt from "./EmailPrompt";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props={
    articles:ArticlesType,
}

const Articles=({articles}:Props) => {
    const searchParams = useSearchParams()
 
    const search = searchParams.get('search');

    return (
        <>
        <div className="flex flex-col justify-center items-center gap-y-4">
        <Typography variant="h3" className="font-extrabold">{search=="ews"?'Early Warning Articles':'Lead Generation Articles'}</Typography>
        
        <EmailPrompt articles={search=="ews"?articles.negative_articles:articles.positive_articles} lead_gen={search!=="ews"} />
        </div>

        <Grid container spacing={2}>
            {search=="ews"?
                articles?.negative_articles?.map((article: Article, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="article-card" key={index} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="Articleimage"
                                    height="300"
    
                                    image={article.image?.toString() || "azentio.jpg"}
                                />
                                <CardContent>
                                    <Typography variant="h6" className="font-extrabold text-2xl">Headline:</Typography>
                                    <Typography>{article.headline}</Typography>
                                    <Typography variant="h6" className="font-extrabold text-2xl">Summary:</Typography>
                                    <Typography>{article.summary}</Typography>
                                    {/* <image src={article.image?.toString() || ""} alt="Article image" height={256} width={256} /> */}
                                    <Link href={article.url?.toString() || ""} target="blank" className="text-blue-500 hover:text-blue-700">Read more...</Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
                :
                articles?.positive_articles?.map((article: Article, index: number) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="article-card gap-y-2" key={index} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="Articleimage"
                                    height="300"
    
                                    image={article.image?.toString() || "azentio.jpg"}
                                />
                                <CardContent>
                                    <Typography variant="h6">Headline:</Typography>
                                    <Typography>{article.headline}</Typography>
                                    <Typography variant="h6">Summary:</Typography>
                                    <Typography>{article.summary}</Typography>
                                    {/* <image src={article.image?.toString() || ""} alt="Article image" height={256} width={256} /> */}
                                    <Link href={article.url?.toString() || ""} target="blank" className="text-blue-500 hover:text-blue-700">Read more...</Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
        
            }
            
        </Grid>
        </>

    )
}
export default Articles;
