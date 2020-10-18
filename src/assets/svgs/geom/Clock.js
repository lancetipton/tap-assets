import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Clock = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M16 0A16 16 0 000 16a16 16 0 0016 16 16 16 0 0016-16A16 16 0 0016 0m0 4a12 12 0 0112 12 12 12 0 01-12 12A12 12 0 014 16 12 12 0 0116 4m-2 2v11.25L22 22l2.25-3.5L18 14.75V6z"
      }
    />
  );
};
