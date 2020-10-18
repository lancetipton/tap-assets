import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgRetweet = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M300 225L0 525h225v375h450L525 750H375V525h225L300 225zm225 75l150 150h150v225H600l300 300 300-300H975V300H525z"
      }
    />
  );
};
