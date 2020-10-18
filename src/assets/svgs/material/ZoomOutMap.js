import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ZoomOutMap = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M30 6l4.59 4.59-5.76 5.75 2.83 2.83 5.75-5.76L42 18V6zM6 18l4.59-4.59 5.75 5.76 2.83-2.83-5.76-5.75L18 6H6zm12 24l-4.59-4.59 5.76-5.75-2.83-2.83-5.75 5.76L6 30v12zm24-12l-4.59 4.59-5.75-5.76-2.83 2.83 5.76 5.75L30 42h12z"
      }
    />
  );
};
