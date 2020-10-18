import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ThumbUp = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4.47 0C4.28.02 4.1.15 4 .34 3.87.6 2.91 2.53 2.72 2.72 2.53 2.91 2.28 3 2 3v4h3.5c.21 0 .39-.13.47-.31C5.97 6.69 7 3.78 7 3.5c0-.28-.22-.5-.5-.5H5c-.28 0-.5-.25-.5-.5S4.89.92 4.97.66a.504.504 0 00-.31-.63C4.59.01 4.54-.01 4.47 0zM0 3v4h1V3H0z"
      }
    />
  );
};
