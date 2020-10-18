import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BatteryCharge = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M5 10v6h11v-6H5zm5.83 4.908L9.62 13 7 13.428l3.223-2.324L11.398 13 14 12.57l-3.17 2.338zM19 10c0-1.654-1.346-3-3-3H5c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 6c0 .552-.449 1-1 1H5c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"
      }
    />
  );
};
