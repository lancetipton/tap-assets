import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ArrowCircleLeft = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1v2h3v2H4v2L1 4l3-3z"
      }
    />
  );
};
