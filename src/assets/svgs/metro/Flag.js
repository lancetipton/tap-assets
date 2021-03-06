import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Flag = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1195 1195"}
      delta={
        "M85.333 64h128v1024h-128V64zm832 643.002c82.624 0 154.57-19.984 192-49.5v-512c-37.43 29.518-109.376 49.502-192 49.502s-154.57-19.984-192-49.502v512c37.43 29.516 109.376 49.5 192 49.5zm-224-610.474C646.427 76.588 577.813 64 501.333 64c-96.396 0-180.334 19.984-224 49.502v512C321 595.984 404.937 576 501.333 576c76.48 0 145.094 12.588 192 32.528v-512z"
      }
    />
  );
};
