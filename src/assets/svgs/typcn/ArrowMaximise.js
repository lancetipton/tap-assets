import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgArrowMaximise = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M15 4a1 1 0 100 2h1.586l-3.293 3.293a.999.999 0 101.414 1.414L18 7.414V9a1 1 0 102 0V4h-5zm-5.707 9.293L6 16.586V15a1 1 0 10-2 0v4.999h.996L9 20a1 1 0 000-2H7.414l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001zM7 12a1 1 0 001-1V8h3a1 1 0 100-2H6.001L6 11a1 1 0 001 1zm10 0a1 1 0 00-1 1v3h-3a1 1 0 100 2h5v-5a1 1 0 00-1-1z"
      }
    />
  );
};
