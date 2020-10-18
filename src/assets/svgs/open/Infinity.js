import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgInfinity = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M2 2C.69 2 0 3.01 0 4s.69 2 2 2c.79 0 1.42-.56 2-1.22C4.58 5.44 5.19 6 6 6c1.31 0 2-1.01 2-2s-.69-2-2-2c-.81 0-1.42.56-2 1.22C3.42 2.56 2.79 2 2 2zm0 1c.42 0 .88.47 1.34 1-.46.53-.92 1-1.34 1-.74 0-1-.54-1-1 0-.46.26-1 1-1zm4 0c.74 0 1 .54 1 1 0 .46-.26 1-1 1-.43 0-.89-.47-1.34-1 .46-.53.91-1 1.34-1z"
      }
    />
  );
};