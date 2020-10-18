import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCrop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M1 0v1H0v1h1v5h5v1h1V7h1V6H7V1.5l1-1-.5-.5-1 1H2V0H1zm1 2h3.5L2 5.5V2zm4 .5V6H2.5L6 2.5z"
      }
    />
  );
};
