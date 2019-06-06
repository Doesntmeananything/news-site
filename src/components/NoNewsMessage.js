import * as React from "react";
import { Card, StyledBody } from "baseui/card";
import { Block } from "baseui/block";

export default () => (
  <Block width={["320px", "320px", "500px"]}>
    <Card
      overrides={{
        Root: {
          style: {
            minWidth: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "12px"
          }
        }
      }}
      headerImage={
        "http://www.pages.drexel.edu/~dml46/DASL/HUBO/thm/robot_questionmark.gif"
      }
      title="No News Found?"
    >
      <StyledBody>
        Select a different <strong>country</strong>, <strong>category</strong>{" "}
        or type in another
        <strong> search term</strong>.
      </StyledBody>
    </Card>
  </Block>
);
