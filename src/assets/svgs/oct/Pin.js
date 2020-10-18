import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Pin = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 00.86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 00-.86.34z"
      }
    />
  );
};
