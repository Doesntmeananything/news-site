import * as React from "react";
import { Card, StyledBody } from "baseui/card";

export default () => (
  <Card
    overrides={{ Root: { style: { minWidth: "320px" } } }}
    headerImage={
      "http://www.pages.drexel.edu/~dml46/DASL/HUBO/thm/robot_questionmark.gif"
    }
    title="No News Found?"
  >
    <StyledBody>
      Select a different <strong>category</strong> or type in another
      <strong>search term</strong>.
    </StyledBody>
  </Card>
);
