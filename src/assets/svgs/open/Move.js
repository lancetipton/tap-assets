import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgMove = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M3.5 0L2 1.5h1V3H1.5V2L0 3.5 1.5 5V4H3v1.5H2L3.5 7 5 5.5H4V4h1.5v1L7 3.5 5.5 2v1H4V1.5h1L3.5 0z"
      }
    />
  );
};
