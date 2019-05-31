import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import Card from "./Card";

export default function DisplayTopHeadlines(props) {
  return (
    <>
      <FlexGrid
        flexGridColumnCount={1}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {props.articles &&
          props.articles.map((article, index) => (
            <FlexGridItem key={article.title}>
              <Card
                to={article.url}
                title={article.title.split(" - ")[0]}
                source={article.title.split(" - ")[1]}
                tagKey={article.title}
                brKey={index}
                image={article.urlToImage}
                description={article.description}
              />
            </FlexGridItem>
          ))}
      </FlexGrid>
    </>
  );
}
