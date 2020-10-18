import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgFlipboard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M0 0h5.16v16H0zm5.677 5.677h5.16v5.16h-5.16zm0-5.677H16v5.16H5.677z"
      }
    />
  );
};
