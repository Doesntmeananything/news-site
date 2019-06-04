import React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { Tag } from "baseui/tag";
import ArrowRight from "baseui/icon/arrow-right";
import { Block } from "baseui/block";

export default props => {
  return (
    <Block width={["320px", "320px", "500px"]}>
      <Card
        overrides={{
          // Root: { style: { width: "320px" } },
          Contents: { style: { marginTop: "6px" } }
        }}
        headerImage={props.image}
        title={[
          <Tag
            key={props.tagKey}
            overrides={{
              Root: { style: { marginLeft: "0" } }
            }}
            closeable={false}
          >
            {props.source}
          </Tag>,
          <Tag
            closeable={false}
            variant="outlined"
            key={props.timeTagKey}
            overrides={{
              Root: { style: { borderStyle: "none" } }
            }}
          >
            {props.publishedTime}
          </Tag>,
          <br key={props.brKey} />,
          props.title
        ]}
      >
        <StyledBody>{props.description}</StyledBody>
        <StyledAction>
          <Button
            href={props.to}
            target="_blank"
            rel="noopener noreferrer"
            overrides={{
              BaseButton: {
                props: {
                  $as: "a"
                }
              }
            }}
            endEnhancer={() => <ArrowRight size={24} />}
            style={{ width: "85%" }}
          >
            Read More
          </Button>
        </StyledAction>
      </Card>
    </Block>
  );
};
