import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BatteryUnknown = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67a2.67 2.67 0 002.67 2.67h14.67a2.67 2.67 0 002.67-2.67V10.67A2.678 2.678 0 0031.33 8zM25.9 35.9h-3.8v-3.8h3.8v3.8zm2.7-10.52s-.76.84-1.34 1.42c-.97.97-1.66 2.29-1.66 3.2h-3.2c0-1.66.92-3.05 1.86-3.99l1.86-1.89A2.996 2.996 0 0024 19c-1.66 0-3 1.34-3 3h-3c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.32-.53 2.52-1.4 3.38z"
      }
    />
  );
};
