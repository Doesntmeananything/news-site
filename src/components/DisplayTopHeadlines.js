import React, { useState, useEffect } from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import Card from "./Card";
import { newsApiKey as apiKey } from "../config";

export default function DisplayTopHeadlines() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("us");
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=us${apiKey}`
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);
      const result = await data.json();

      setArticles(result.articles);
    }

    fetchData();
  }, [url]);

  return (
    <>
      <input
        type="text"
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(
            `https://newsapi.org/v2/top-headlines?country=${country}${apiKey}`
          )
        }
      >
        Search
      </button>
      <FlexGrid
        flexGridColumnCount={1}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {articles &&
          articles.map(article => (
            <FlexGridItem key={article.title}>
              <Card
                title={article.title.split(" - ")[0]}
                image={article.urlToImage}
                description={article.description}
              />
            </FlexGridItem>
          ))}
      </FlexGrid>
    </>
  );
}
