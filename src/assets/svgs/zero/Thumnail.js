import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgThumnail = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M13 3v3h-3V3h3M6 3v3H3V3h3m7 7v3h-3v-3h3m-7 0v3H3v-3h3m8-8H9v5h5V2zM7 2H2v5h5V2zm7 7H9v5h5V9zM7 9H2v5h5V9z"
      }
    />
  );
};
