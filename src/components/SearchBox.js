import React from "react";
import { Block } from "baseui/block";
import { Search } from "baseui/icon";
import { StatefulInput } from "baseui/input";

const options = {
  placeholder: "Search news about...",
  type: "search"
};

export default props => {
  return (
    <Block>
      <form onSubmit={props.onSubmitSearch}>
        <StatefulInput
          {...options}
          overrides={{
            Before: () => (
              <Block display="flex" alignItems="center" paddingLeft="scale500">
                <Search size="16px" />
              </Block>
            )
          }}
          onChange={props.onChangeInput}
        />
        <button type="submit" style={{ display: "none" }}>
          Search
        </button>
      </form>
    </Block>
  );
};
