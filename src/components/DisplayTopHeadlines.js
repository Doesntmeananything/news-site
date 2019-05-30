import React, { useState, useEffect } from "react";
import Card from "./Card";
import { newsApiKey as apiKey } from "../config";

export default function DisplayTopHeadlines() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("us");
  const url = "https://newsapi.org/v2/top-headlines?";

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const data = await fetch(`${url}country=${country}${apiKey}`);
      const result = await data.json();

      if (!ignore) setArticles(result.articles);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, [country]);

  console.log(articles);
  return (
    <div>
      <input value={country} onChange={e => setCountry(e.target.value)} />
      {articles &&
        articles.map(article => (
          <Card
            title={article.title.split("-")[0]}
            image={article.urlToImage}
            description={article.description}
          />
        ))}
    </div>
  );
}
