import React, { useState, useEffect } from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import DisplayTopHeadlines from "./components/DisplayTopHeadlines";
import { newsApiKey as apiKey } from "./config";

function App() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
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
      <header
        style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff" }}
      >
        <HeaderNavigation
          onChangeCountry={e => {
            const countryCode = e.option.code;
            setCountry(countryCode);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&q=${query}${apiKey}`
            );
          }}
          onChangeCategory={e => {
            const categoryCode = e.option.code;
            setCategory(categoryCode);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoryCode}&q=${query}${apiKey}`
            );
          }}
          onChangeInput={e => {
            setQuery(e.target.value);
          }}
          onKeyDownInput={e => {
            if (e.keyCode === 13) {
              setUrl(
                `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${query}${apiKey}`
              );
            }
          }}
        />
      </header>
      <main style={{ marginTop: "12px" }}>
        <DisplayTopHeadlines articles={articles} />
      </main>
    </>
  );
}

export default App;
