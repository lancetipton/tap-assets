import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgDisplay = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={"M0 1v10h16V1H0zm15 9H1V2h14v8zm-4.5 2h-5L5 14l-1 1h8l-1-1z"}
    />
  );
};
