import React from "react";
import HeaderNavigation from "./components/HeaderNavigation";
import DisplayTopHeadlines from "./components/DisplayTopHeadlines";

function App() {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <DisplayTopHeadlines />
      </main>
    </>
  );
}

export default App;
