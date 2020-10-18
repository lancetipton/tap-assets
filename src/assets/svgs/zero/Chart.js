import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Chart = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M16 4V1h-3v1H3V1H0v3h1v8H0v3h3v-1h10v1h3v-3h-1V4h1zm-2-2h1v1h-1V2zM1 2h1v1H1V2zm0 12v-1h1v1H1zm14 0h-1v-1h1v1zm-1-2h-1v1H3v-1H2V4h1V3h10v1h1v8zM4 4h2v8H4V4zm3 4h2v4H7V8zm3-2h2v6h-2V6z"
      }
    />
  );
};
