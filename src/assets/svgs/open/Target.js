import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTarget = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 1c1.66 0 3 1.34 3 3S5.66 7 4 7 1 5.66 1 4s1.34-3 3-3zm0 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 1c.56 0 1 .44 1 1s-.44 1-1 1-1-.44-1-1 .44-1 1-1z"
      }
    />
  );
};
