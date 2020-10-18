import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Star = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={"M16 0l5 11 11 1-9 7 3 12-10-6-10 6 3-12-9-7 11-1"}
    />
  );
};
