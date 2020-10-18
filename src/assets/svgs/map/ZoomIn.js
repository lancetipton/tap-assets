import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgZoomIn = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={"M48 20H30V2H20v18H2v10h18v18h10V30h18z"}
    />
  );
};
