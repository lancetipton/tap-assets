import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgGravatar = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 0a1.6 1.6 0 00-1.6 1.6v5.6a1.6 1.6 0 003.2 0V3.474A4.801 4.801 0 113.2 8c0-1.326.537-2.526 1.406-3.394a1.6 1.6 0 10-2.263-2.263A8 8 0 108 0"
      }
    />
  );
};
