import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FreezeColumn = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M1 15h14V1H1v14zm9-9v4H6V6h4zm-4 8v-3h4v3H6zm-1 0h-.955L5 13.045V14zm0-2.369L2.631 14H2v-1.189l3-3v1.82zm-3-.235V9.561l3-3v1.836l-3 2.999zm0-3.25V6.311l3-3v1.836L2 8.146zm0-3.25V3.561L3.561 2h1.336L2 4.896zM14 14h-3v-3h3v3zm0-4h-3V6h3v4zm0-8v3h-3V2h3zm-4 3H6V2h4v3z"
      }
    />
  );
};
