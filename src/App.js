import React, { useState, useEffect } from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import DisplayTopHeadlines from "./components/DisplayTopHeadlines";
import PageSwitcher from "./components/PageSwitcher";
import FooterContent from "./components/FooterContent";

const apiKey = process.env.API_KEY;

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

function App() {
  // Api data
  const [response, setResponse] = useState({});
  const [articles, setArticles] = useState([]);
  // Pagination data
  const [currentPage, setCurrentPage] = useState(1);
  // Api request data
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  );

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url);
      const result = await data.json();

      setResponse(result);
      setArticles(result.articles);
    }

    fetchData();
    scrollToTop();
  }, [url]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#fff"
        }}
      >
        <HeaderNavigation
          onChangeCountry={e => {
            const countryCode = e.option.code;
            setCountry(countryCode);
            setCurrentPage(1);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${category}&q=${query}&apiKey=${apiKey}`
            );
          }}
          onChangeCategory={e => {
            const categoryCode = e.option.code;
            setCategory(categoryCode);
            setCurrentPage(1);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoryCode}&q=${query}&apiKey=${apiKey}`
            );
          }}
          onChangeInput={e => {
            setQuery(e.target.value);
          }}
          onSubmitSearch={e => {
            setCurrentPage(1);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${query}&apiKey=${apiKey}`
            );
            e.preventDefault();
          }}
        />
      </header>
      <main style={{ marginTop: "12px", marginBottom: "12px" }}>
        <DisplayTopHeadlines articles={articles} />
      </main>
      <footer>
        <PageSwitcher
          totalPages={
            response.totalResults / 20 < 1
              ? 1
              : Math.ceil(response.totalResults / 20)
          }
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(nextPage);
            setUrl(
              `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${query}&page=${nextPage}&apiKey=${apiKey}`
            );
          }}
        />
        <FooterContent />
      </footer>
    </>
  );
}

export default App;
