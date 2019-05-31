import React from "react";
import { StatefulSelect } from "baseui/select";

const options = {
  options: [
    { id: "All categories", code: "" },
    { id: "Business", code: "business" },
    { id: "Entertainment", code: "entertainment" },
    { id: "General", code: "general" },
    { id: "Health", code: "health" },
    { id: "Science", code: "science" },
    { id: "Sports", code: "sports" },
    { id: "Technology", code: "technology" }
  ],
  initialState: { value: [{ id: "All categories", code: "" }] },
  labelKey: "id",
  valueKey: "code",
  placeholder: "Select a category",
  maxDropdownHeight: "300px",
  clearable: false
};

export default props => (
  <StatefulSelect {...options} onChange={props.onChangeCategory} />
);
