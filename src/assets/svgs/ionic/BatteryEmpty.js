import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BatteryEmpty = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M469.9 192H433v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c-.1-5.5-4.6-10-10.2-10zM448 288h-47v64H64V160h337v64h47v64z"
      }
    />
  );
};
