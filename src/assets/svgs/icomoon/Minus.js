import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Minus = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M0 6.5v3a.5.5 0 00.5.5h15a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5z"
      }
    />
  );
};
