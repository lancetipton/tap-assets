import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ArrowLeft = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M17 11H9.414l2.293-2.293a.999.999 0 10-1.414-1.414L5.586 12l4.707 4.707a.997.997 0 001.414 0 .999.999 0 000-1.414L9.414 13H17a1 1 0 000-2z"
      }
    />
  );
};
