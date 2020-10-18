import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Task = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M0 0v7h7V3.41l-1 1V6H1V1h3.59l1-1H0zm7 0L4 3 3 2 2 3l2 2 4-4-1-1z"
      }
    />
  );
};
