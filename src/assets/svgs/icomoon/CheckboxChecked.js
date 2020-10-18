import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCheckboxChecked = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 12.414L3.293 8.707l1.414-1.414L7 9.586l4.793-4.793 1.414 1.414L7 12.414z"
      }
    />
  );
};
