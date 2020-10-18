import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgMessage = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1H9.171L9 16.171V16H6c-.542 0-1-.458-1-1V8c0-.542.458-1 1-1h12m0-2H6C4.35 5 3 6.35 3 8v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3V8c0-1.65-1.35-3-3-3z"
      }
    />
  );
};
