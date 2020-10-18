import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgMessageTyping = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M18 6H5C3.35 6 2 7.35 2 9v7c0 1.65 1.35 3 3 3h1v3l3-3h9c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3zm1 10c0 .542-.458 1-1 1H5c-.542 0-1-.458-1-1V9c0-.542.458-1 1-1h13c.542 0 1 .458 1 1v7zM7 14.5a2 2 0 11.001-4.001A2 2 0 017 14.5zm0-3a1 1 0 100 2 1 1 0 000-2zm4.5 3a2 2 0 11.001-4.001A2 2 0 0111.5 14.5zm0-3a1 1 0 100 2 1 1 0 000-2zm4.5 3a2 2 0 11.001-4.001A2 2 0 0116 14.5zm0-3a1 1 0 100 2 1 1 0 000-2z"
      }
    />
  );
};