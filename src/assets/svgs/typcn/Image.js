import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgImage = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M16 10c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4H19s-1-6-3-6zm4-7H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 14H4V5h16v12z"
      }
    />
  );
};
