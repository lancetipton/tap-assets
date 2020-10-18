import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgLink = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M0 16a8 8 0 018-8h6a8 8 0 018 8h-4a4 4 0 00-4-4H8a4 4 0 00-4 4 4 4 0 004 4l2 4H8a8 8 0 01-8-8zm22-8h2a8 8 0 018 8 8 8 0 01-8 8h-6a8 8 0 01-8-8h4a4 4 0 004 4h6a4 4 0 004-4 4 4 0 00-4-4z"
      }
    />
  );
};
