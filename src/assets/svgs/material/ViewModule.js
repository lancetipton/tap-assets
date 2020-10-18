import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgViewModule = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M8 22h10V10H8v12zm0 14h10V24H8v12zm12 0h10V24H20v12zm12 0h10V24H32v12zM20 22h10V10H20v12zm12-12v12h10V10H32z"
      }
    />
  );
};
