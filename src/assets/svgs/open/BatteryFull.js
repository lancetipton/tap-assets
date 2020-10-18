import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BatteryFull = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M.09 1C.03 1 0 1.04 0 1.09V6.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V4.99h1v-2h-1V1.08c0-.06-.04-.09-.09-.09H.09z"
      }
    />
  );
};
