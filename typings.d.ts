type Article={
    headline?:String,
    summary?:String,
    url?:String,
    image?:String,
  }
  
  type ArticlesType= {
    positive_articles:[Article],
    negative_articles:[Article],
  }
  