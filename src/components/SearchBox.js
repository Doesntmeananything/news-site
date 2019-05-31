import React from "react";
import { Block } from "baseui/block";
import { Search } from "baseui/icon";
import { StatefulInput } from "baseui/input";

const options = {
  placeholder: "Search news about..."
};

export default props => (
  <Block>
    <StatefulInput
      {...options}
      overrides={{
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="16px" />
          </Block>
        )
      }}
      onChange={props.onChangeSearch}
    />
  </Block>
);
