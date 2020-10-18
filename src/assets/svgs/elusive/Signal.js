import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Signal = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M960 1200V0h240v1200H960zM640 300h240v900H640V300zM320 600h240v600H320V600zM0 900h240v300H0V900z"
      }
    />
  );
};
