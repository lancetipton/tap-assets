import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Cog = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M14 0h4l1 6 1.707.707L26 3.293 28.707 6l-3.414 5.293L26 13l6 1v4l-6 1-.707 1.707L28.707 26 26 28.707l-5.293-3.414L19 26l-1 6h-4l-1-6-1.707-.707L6 28.707 3.293 26l3.414-5.293L6 19l-6-1v-4l6-1 .707-1.707L3.293 6 6 3.293l5.293 3.414L13 6l1-6zm2 10a6 6 0 000 12 6 6 0 000-12"
      }
    />
  );
};
