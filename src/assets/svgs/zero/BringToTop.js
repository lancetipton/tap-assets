import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BringToTop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 8h-1V6a2 2 0 00-2-2H8V2a2 2 0 00-2-2H2a2 2 0 00-2 2v4a2 2 0 002 2h2v3a2 2 0 002 2h2v1a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm-8 4c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v5c0 .551-.449 1-1 1H6z"
      }
    />
  );
};
