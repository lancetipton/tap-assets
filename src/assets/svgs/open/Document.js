import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgDocument = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M0 0v8h7V4H3V0H0zm4 0v3h3L4 0zM1 2h1v1H1V2zm0 2h1v1H1V4zm0 2h4v1H1V6z"
      }
    />
  );
};
