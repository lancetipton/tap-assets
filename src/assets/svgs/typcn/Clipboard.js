import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Clipboard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M17 3H7C5.346 3 4 4.346 4 6v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM9 5h6v1c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1V5zm9 13c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h1v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5h1c.551 0 1 .449 1 1v12zm-2-1H8a.5.5 0 010-1h8a.5.5 0 010 1zm0-3H8a.5.5 0 010-1h8a.5.5 0 010 1zm0-3H8a.5.5 0 010-1h8a.5.5 0 010 1z"
      }
    />
  );
};
