import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const LockUnlocked = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C2.9 0 2 .9 2 2h1c0-.56.44-1 1-1s1 .44 1 1v2H1v4h6V4H6V2c0-1.1-.9-2-2-2z"
      }
    />
  );
};
