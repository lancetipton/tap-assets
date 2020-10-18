import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPointOfInterest = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M31 25.002A5.999 5.999 0 1031 37a6 6 0 000-11.998zm12.001-12.005L38.06 3.03A2.991 2.991 0 0035.221 1H26.98a2.992 2.992 0 00-2.854 2.075L19.007 13H6.999A6.004 6.004 0 001 19.001V49h48V19.001a6.005 6.005 0 00-5.999-6.004zM10 25.002a2.998 2.998 0 01-3.001-2.998c0-1.662 1.342-3.003 3.001-3.003s2.999 1.341 2.999 3.003A2.996 2.996 0 0110 25.002zm21 18.004c-6.625 0-12.001-5.377-12.001-12.006 0-6.626 5.375-11.999 12.001-11.999 6.626 0 12.001 5.372 12.001 11.999 0 6.629-5.375 12.006-12.001 12.006z"
      }
    />
  );
};
