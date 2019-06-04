import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import Card from "./Card";

export default function DisplayTopHeadlines(props) {
  return (
    <>
      <FlexGrid
        flexGridColumnCount={[1]}
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
                source={article.source.name}
                tagKey={article.title}
                brKey={index}
                image={
                  article.urlToImage ||
                  "http://redferns.ca/wp-content/uploads/2018/07/news.jpg"
                }
                description={article.description}
              />
            </FlexGridItem>
          ))}
      </FlexGrid>
    </>
  );
}
