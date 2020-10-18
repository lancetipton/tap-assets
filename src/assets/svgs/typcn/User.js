import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const User = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M17 9c0-1.381-.56-2.631-1.464-3.535C14.631 4.56 13.381 4 12 4s-2.631.56-3.536 1.465C7.56 6.369 7 7.619 7 9s.56 2.631 1.464 3.535C9.369 13.44 10.619 14 12 14s2.631-.56 3.536-1.465A4.984 4.984 0 0017 9zM6 19c0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4-3.75 0-6 2-6 4z"
      }
    />
  );
};
