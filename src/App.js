import React, { useState, useEffect } from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import DisplayTopHeadlines from "./components/DisplayTopHeadlines";
import { newsApiKey as apiKey } from "./config";

function App() {
  const [articles, setArticles] = useState([]);
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
      <header>
        <HeaderNavigation
          onChangeCountry={e => {
            console.log(e.option.code);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${
                e.option.code
              }${apiKey}`
            );
          }}
        />
      </header>
      <main>
        <DisplayTopHeadlines articles={articles} />
      </main>
    </>
  );
}

export default App;
