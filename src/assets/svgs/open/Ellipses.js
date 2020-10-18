import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Ellipses = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={"M0 3v2h2V3H0zm3 0v2h2V3H3zm3 0v2h2V3H6z"}
    />
  );
};
