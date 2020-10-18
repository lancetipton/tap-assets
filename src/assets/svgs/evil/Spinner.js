import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgSpinner = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={"M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"}
    />
  );
};
