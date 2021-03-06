import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const PieChart = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M3.5 0c-.97 0-1.84.4-2.47 1.03L4 4V.03A4.07 4.07 0 003.5 0zM5 1.06v3.41L2.28 7.19c.61.5 1.37.81 2.22.81C6.43 8 8 6.43 8 4.5c0-1.76-1.31-3.19-3-3.44zM.91 2.37C.35 2.91 0 3.66 0 4.5c0 .96.46 1.79 1.16 2.34l2.13-2.13L.91 2.37z"
      }
    />
  );
};
