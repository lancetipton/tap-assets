import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ThumbTack = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1792 1792"}
      delta={
        "M800 864V416q0-14-9-23t-23-9-23 9-9 23v448q0 14 9 23t23 9 23-9 9-23zm672 352q0 26-19 45t-45 19H979l-51 483q-2 12-10.5 20.5T897 1792h-1q-27 0-32-27l-76-485H384q-26 0-45-19t-19-45q0-123 78.5-221.5T576 896V384q-52 0-90-38t-38-90 38-90 90-38h640q52 0 90 38t38 90-38 90-90 38v512q99 0 177.5 98.5T1472 1216z"
      }
    />
  );
};
