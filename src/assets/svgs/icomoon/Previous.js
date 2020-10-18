import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Previous = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 0a8 8 0 100 16A8 8 0 008 0zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
      }
    />
  );
};
