import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BatteryEmpty = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1195 1195"}
      delta={
        "M981.333 672h-32v32c0 35.328-28.64 64-64 64h-640c-35.36 0-64-28.672-64-64V480c0-35.328 28.64-64 64-64h640c35.36 0 64 28.672 64 64v32h32c17.696 0 32 14.304 32 32v96c0 17.664-14.304 32-32 32zm-64-192c0-17.696-14.304-32-32-32h-640c-17.696 0-32 14.304-32 32v224c0 17.664 14.304 32 32 32h640c17.696 0 32-14.336 32-32V480z"
      }
    />
  );
};
