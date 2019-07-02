import React from "react";
import { Label1 } from "baseui/typography";
import { StyledLink } from "baseui/link";

export default () => (
  <Label1
    backgroundColor="mono900"
    color="mono400"
    display="flex"
    justifyContent="center"
    alignItems="center"
    style={{
      width: "100%",
      height: "50px",
      marginTop: "12px"
    }}
  >
    Powered by&nbsp;
    <StyledLink
      style={{ color: "#E5E5E5", textDecoration: "underline" }}
      href="https://newsapi.org/"
    >
      News API
    </StyledLink>
  </Label1>
);
