import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Checkmark = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={"M13.5 2L6 9.5 2.5 6 0 8.5l6 6 10-10z"}
    />
  );
};
