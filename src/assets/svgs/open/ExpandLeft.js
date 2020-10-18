import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ExpandLeft = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={"M0 0v8h1V0H0zm6 0v8h2V0H6zM2 2v4l2-2-2-2z"}
    />
  );
};
