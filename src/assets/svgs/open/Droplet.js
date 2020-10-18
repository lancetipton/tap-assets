import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgDroplet = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M4 0l-.34.34C3.55.45 1 3.03 1 5.22c0 1.65 1.35 3 3 3s3-1.35 3-3C7 3.04 4.45.45 4.34.34L4 0zM2.5 4.72c.28 0 .5.22.5.5 0 .55.45 1 1 1 .28 0 .5.22.5.5s-.22.5-.5.5c-1.1 0-2-.9-2-2 0-.28.22-.5.5-.5z"
      }
    />
  );
};