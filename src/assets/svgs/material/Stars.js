import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgStars = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zm8.47 32L24 30.9 15.54 36l2.24-9.62-7.46-6.47 9.84-.84L24 10l3.84 9.07 9.84.84-7.46 6.47L32.46 36z"
      }
    />
  );
};
