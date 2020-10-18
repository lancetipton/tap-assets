import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const MakeGroup = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M5 2H3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm6 4h2c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0-3h2v2h-2V3zm-6 7H3c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1zm0 3H3v-2h2v2zm8-3h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"
      }
    />
  );
};
