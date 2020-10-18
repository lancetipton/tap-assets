import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const DeviceTablet = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M17 4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.5a1 1 0 102 0H17c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 13H8V5h9v12zm1-16H7C5.346 1 4 2.346 4 4v15c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zm1 18c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h11c.551 0 1 .449 1 1v15z"
      }
    />
  );
};
