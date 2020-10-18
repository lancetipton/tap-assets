import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Camera = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M19 6h-1.586l-1-1c-.579-.579-1.595-1-2.414-1h-4c-.819 0-1.835.421-2.414 1l-1 1H5C3.346 6 2 7.346 2 9v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3zm-7 10a3.5 3.5 0 11.001-7.001A3.5 3.5 0 0112 16zm6-4.701a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6z"
      }
    />
  );
};
