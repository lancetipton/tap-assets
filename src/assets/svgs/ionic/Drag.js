import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgDrag = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={"M0 144h512v32H0zm0 96h512v32H0zm0 96h512v32H0z"}
    />
  );
};
