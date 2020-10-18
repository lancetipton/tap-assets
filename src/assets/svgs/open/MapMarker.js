import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const MapMarker = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0C2.34 0 1 1.34 1 3c0 2 3 5 3 5s3-3 3-5c0-1.66-1.34-3-3-3zm0 1a2 2 0 012 2c0 1.11-.89 2-2 2a2 2 0 110-4z"
      }
    />
  );
};
