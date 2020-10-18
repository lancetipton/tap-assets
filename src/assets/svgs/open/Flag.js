import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgFlag = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={"M0 0v8h1V0H0zm2 0v4h2v1h4L6 3.03 8 1H5V0H2z"}
    />
  );
};
