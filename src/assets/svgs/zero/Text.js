import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Text = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15 4V1h-3v1H3V1H0v3h1v8H0v3h3v-1h9v1h3v-3h-1V4h1zm-2-2h1v1h-1V2zM1 2h1v1H1V2zm0 12v-1h1v1H1zm13 0h-1v-1h1v1zm-1-2h-1v1H3v-1H2V4h1V3h9v1h1v8zm-2-6.5a.5.5 0 01-.5.5H8v4.5a.5.5 0 01-1 0V6H4.5a.5.5 0 010-1h6a.5.5 0 01.5.5z"
      }
    />
  );
};
