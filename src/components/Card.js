import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import ArrowRight from "baseui/icon/arrow-right";

export default props => {
  return (
    <Card
      overrides={{ Root: { style: { width: "320px" } } }}
      headerImage={props.image}
      title={props.title}
    >
      <StyledBody>{props.description}</StyledBody>
      <StyledAction>
        <Button
          endEnhancer={() => <ArrowRight size={24} />}
          style={{ width: "100%" }}
        >
          Read More
        </Button>
      </StyledAction>
    </Card>
  );
};
