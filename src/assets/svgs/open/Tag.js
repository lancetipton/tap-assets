import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Tag = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M0 0v3l5 5 3-3-5-5H0zm2 1c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
      }
    />
  );
};
