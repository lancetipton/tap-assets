import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTab = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15 0h1v8h-1V0zM0 8h1v8H0V8zm5 3h11v2H5v2.5L1.5 12 5 8.5V11zm6-6H0V3h11V.5L14.5 4 11 7.5z"
      }
    />
  );
};
