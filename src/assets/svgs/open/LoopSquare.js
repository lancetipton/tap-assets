import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const LoopSquare = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M1 0v2h1V1h4v2H5l1.5 2.5L8 3H7V0H1zm.5 2.5L0 5h1v3h6V6H6v1H2V5h1L1.5 2.5z"
      }
    />
  );
};
