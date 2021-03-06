import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const FreezeRow = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M1 1v14h14V1H1zm9 8H6V6h4v3zM2 6h3v3H2V6zm0-1v-.955L2.955 5H2zm2.369 0L2 2.631V2h1.189l3 3h-1.82zm.235-3H6.44l3 3H7.604l-3-3zm3.25 0h1.835l3 3h-1.836L7.854 2zm3.25 0h1.336L14 3.561v1.336L11.104 2zM2 14v-4h3v4H2zm4 0v-4h4v4H6zm8 0h-3v-4h3v4zm-3-5V6h3v3h-3z"
      }
    />
  );
};
