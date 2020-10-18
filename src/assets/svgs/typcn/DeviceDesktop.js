import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const DeviceDesktop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M21 1H3C1.346 1 0 2.346 0 4v11c0 1.654 1.346 3 3 3h6v2H6a1 1 0 000 2h12a1 1 0 000-2h-3v-2h6c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zm-7 19h-4v-2h4v2zm8-5c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v11zM20 4H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 9H4V5h16v8z"
      }
    />
  );
};
