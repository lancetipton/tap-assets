import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Dial = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 1C1.8 1 0 2.8 0 5h1c0-1.66 1.34-3 3-3s3 1.34 3 3h1c0-2.2-1.8-4-4-4zm-.59 2.09A2 2 0 004 7c1.11 0 2-.89 2-2 0-.9-.59-1.65-1.41-1.91L4 3.97l-.59-.88z"
      }
    />
  );
};
