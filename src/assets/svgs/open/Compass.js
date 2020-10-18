import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCompass = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C1.8 0 0 1.8 0 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 1c1.66 0 3 1.34 3 3S5.66 7 4 7 1 5.66 1 4s1.34-3 3-3zm2 1L3 3 2 6l3-1 1-3zM4 3.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5z"
      }
    />
  );
};