import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Monogram = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15.44 0v15.67c0 .3-.356.444-.554.224L8 8.254 2.2 1.82.56 0h14.88zM7.352 8.974l-6.238 6.92c-.198.22-.554.075-.554-.225V0l6.792 8.974z"
      }
    />
  );
};
