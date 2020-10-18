import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Pageview = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M23 18c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm-6.41 28.41l-5.81-5.81c-1.39.88-3.02 1.4-4.78 1.4a9 9 0 119-9c0 1.76-.52 3.39-1.4 4.77l5.82 5.8-2.83 2.84z"
      }
    />
  );
};
