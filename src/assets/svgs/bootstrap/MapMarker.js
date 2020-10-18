import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const MapMarker = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M776 367q117 0 216 60t156.5 161 57.5 218q0 115-70 258-69 109-158 225.5T835 1469l-54 62q-9-8-25.5-24.5T692 1439t-91-103-98.5-128-95.5-148q-60-132-60-249 0-88 34-169.5t91.5-142 137-96.5T776 367zm4.5 195Q689 562 624 627t-65 157 65 156.5 156.5 64.5T937 940.5t65-156.5-65-157-156.5-65z"
      }
    />
  );
};
