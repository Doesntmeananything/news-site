import React from "react";
import { StatefulSelect } from "baseui/select";

const options = {
  options: [
    { id: "General", code: "general" },
    { id: "Business", code: "business" },
    { id: "Entertainment", code: "entertainment" },
    { id: "Health", code: "health" },
    { id: "Science", code: "science" },
    { id: "Sports", code: "sports" },
    { id: "Technology", code: "technology" }
  ],
  labelKey: "id",
  valueKey: "code",
  placeholder: "Select a category",
  maxDropdownHeight: "300px",
  clearable: false
};

export default props => (
  <StatefulSelect
    overrides={{
      Popover: {
        style: {
          zIndex: 200
        }
      }
    }}
    {...options}
    onChange={props.onChangeCategory}
  />
);
