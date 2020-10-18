import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Backward = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 16A8 8 0 108 0a8 8 0 000 16zM8 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13zm3 9L7.5 8 11 5.5zm-4 0L3.5 8 7 5.5z"
      }
    />
  );
};
