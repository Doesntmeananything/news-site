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
        },
        DropdownMenu: {
          style: {
            maxHeight: "70px",
            position: "absolute",
            top: "-40px"
          }
        }
      }}
      numPages={props.totalPages}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
    />
  );
};
