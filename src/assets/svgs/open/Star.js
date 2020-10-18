import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Star = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={"M4 0L3 3H0l2.5 2-1 3L4 6l2.5 2-1-3L8 3H5L4 0z"}
    />
  );
};
