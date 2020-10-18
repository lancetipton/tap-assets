import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Flag = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M0 75.63V1200h159.302V650.952C606.706 528.936 893.763 1025.557 1200 718.694V75.63C724.333 384 473.68-198.41 0 75.63z"
      }
    />
  );
};
