import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const CircleCheck = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm2 1.78l.72.72L3.5 5.72 1.78 4l.72-.72 1 1L6 1.78z"
      }
    />
  );
};
