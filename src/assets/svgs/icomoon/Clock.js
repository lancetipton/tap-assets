import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Clock = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M10.293 11.707L7 8.414V4h2v3.586l2.707 2.707zM8 0a8 8 0 100 16A8 8 0 008 0zm0 14A6 6 0 118 2a6 6 0 010 12z"
      }
    />
  );
};
