import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const MapPin = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M896 1088q66 0 128-15v655q0 26-19 45t-45 19H832q-26 0-45-19t-19-45v-655q61 15 128 15zM896 0q212 0 362 150t150 362-150 362-362 150-362-150-150-362 150-362T896 0zm0 224q14 0 23-9t9-23-9-23-23-9q-146 0-249 103T544 512q0 14 9 23t23 9 23-9 9-23q0-119 84.5-203.5T896 224z"
      }
    />
  );
};
