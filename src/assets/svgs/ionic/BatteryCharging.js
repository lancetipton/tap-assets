import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const BatteryCharging = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M42.1 384h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c0-5.5-4.5-10-10.1-10h-37v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10zm215.3-224l-27.9 81H291L190.6 352l27.9-81H157l100.4-111z"
      }
    />
  );
};
