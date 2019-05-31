import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import Card from "./Card";

export default function DisplayTopHeadlines(props) {
  return (
    <>
      <FlexGrid
        flexGridColumnCount={[1, 2, 3, 4]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"
      >
        {props.articles &&
          props.articles.map((article, index) => (
            <FlexGridItem
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              key={article.title}
            >
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
