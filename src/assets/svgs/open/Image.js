import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Image = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={"M0 0v8h8V0H0zm1 1h6v3L6 3 5 4l2 2v1H6L2 3 1 4V1z"}
    />
  );
};
