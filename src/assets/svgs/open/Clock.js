import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Clock = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 1c1.66 0 3 1.34 3 3S5.66 7 4 7 1 5.66 1 4s1.34-3 3-3zm-.5 1v2.22l.16.13.5.5.34.38.72-.72-.38-.34-.34-.34V2.02h-1z"
      }
    />
  );
};
