import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Badge = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C2.9 0 2 .9 2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM3 4.81V8l1-1 1 1V4.81c-.31.11-.65.19-1 .19s-.69-.08-1-.19z"
      }
    />
  );
};
