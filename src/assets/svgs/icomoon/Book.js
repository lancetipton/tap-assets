import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Book = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 2v13H3.5a1.5 1.5 0 110-3H13V0H3C1.9 0 1 .9 1 2v12c0 1.1.9 2 2 2h12V2h-1z"
      }
    />
  );
};
