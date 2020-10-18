import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgDiff = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 13 16"}
      delta={
        "M6 7h2v1H6v2H5V8H3V7h2V5h1v2zm-3 6h5v-1H3v1zM7.5 2L11 5.5V15c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h6.5zM10 6L7 3H1v12h9V6zM8.5 0H3v1h5l4 4v8h1V4.5L8.5 0z"
      }
    />
  );
};