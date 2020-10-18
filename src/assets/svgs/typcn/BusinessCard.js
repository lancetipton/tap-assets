import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BusinessCard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M20 20H4c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h16c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3zM4 6c-.551 0-1 .449-1 1v10c0 .551.449 1 1 1h16c.551 0 1-.449 1-1V7c0-.551-.449-1-1-1H4zm6 9H6a1 1 0 110-2h4a1 1 0 110 2zm0-4H6a1 1 0 110-2h4a1 1 0 110 2z"
      }
    />
  );
};
