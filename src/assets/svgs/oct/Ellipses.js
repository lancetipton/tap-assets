import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Ellipses = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 12 16"}
      delta={
        "M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z"
      }
    />
  );
};
