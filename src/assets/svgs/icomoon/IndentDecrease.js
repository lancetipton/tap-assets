import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const IndentDecrease = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M0 1h16v2H0zm6 3h10v2H6zm0 3h10v2H6zm0 3h10v2H6zm-6 3h16v2H0zm4-8v6L0 8z"
      }
    />
  );
};
