import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgSpinner = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M6 2a2 2 0 113.999-.001A2 2 0 016 2zm4.243 1.757a2 2 0 113.999-.001 2 2 0 01-3.999.001zM13 8a1 1 0 112 0 1 1 0 01-2 0zm-1.757 4.243a1 1 0 112 0 1 1 0 01-2 0zM7 14a1 1 0 012 0 1 1 0 01-2 0zm-4.243-1.757a1 1 0 012 0 1 1 0 01-2 0zm-.5-8.486a1.5 1.5 0 013 0 1.5 1.5 0 01-3 0zM.875 8a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
      }
    />
  );
};
