import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const CircleX = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM2.5 1.78L4 3.28l1.5-1.5.72.72L4.72 4l1.5 1.5-.72.72L4 4.72l-1.5 1.5-.72-.72L3.28 4l-1.5-1.5.72-.72z"
      }
    />
  );
};
