import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const MinusCircled = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm128 240H128v-32h256v32z"
      }
    />
  );
};
