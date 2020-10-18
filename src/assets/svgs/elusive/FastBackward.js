import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgFastBackward = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M0 1200V0h200v550L700 50v500l500-500v1100L700 650v500L200 650v550z"
      }
    />
  );
};
