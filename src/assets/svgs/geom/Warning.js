import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Warning = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M15 0h2l15 29-1 1H1l-1-1zm4 8h-6l1 12h4zm-3 14a3 3 0 000 6 3 3 0 000-6"
      }
    />
  );
};
