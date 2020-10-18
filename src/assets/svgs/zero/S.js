import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const S = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 2v12H2V2h12m0-1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1z"
      }
    />
  );
};
