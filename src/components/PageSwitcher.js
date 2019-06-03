import React from "react";
import { Pagination } from "baseui/pagination";

export default props => {
  return (
    <Pagination
      overrides={{
        Root: {
          style: {
            display: "flex",
            justifyContent: "center"
          }
        }
      }}
      numPages={props.totalPages}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
    />
  );
};
