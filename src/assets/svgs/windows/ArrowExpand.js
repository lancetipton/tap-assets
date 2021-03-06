import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ArrowExpand = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M30.25 58H18V45.75l4-4v9l8-8L33.25 46l-8 8h9l-4 4zM58 45.75V58H45.75l-4-4h9l-8-8L46 42.75l8 8v-9l4 4zM45.75 18H58v12.25l-4 4v-9l-8 8L42.75 30l8-8h-9l4-4zM18 30.25V18h12.25l4 4h-9l8 8L30 33.25l-8-8v9l-4-4z"
      }
    />
  );
};
