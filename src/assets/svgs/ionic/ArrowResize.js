import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ArrowResize = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M288 96l49.9 49.9-63.9 63.8-128.1 128.2L96 288v128h128l-49.9-49.9 183.3-183.2 8.7-8.8L416 224V96z"
      }
    />
  );
};
