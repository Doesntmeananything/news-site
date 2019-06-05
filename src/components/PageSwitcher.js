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
            position: "absolute",
            top: "-100px"
          }
        }
      }}
      numPages={props.totalPages}
      currentPage={props.currentPage}
      onPageChange={props.onPageChange}
    />
  );
};
