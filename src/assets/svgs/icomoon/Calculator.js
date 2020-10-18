import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCalculator = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M6 1H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 4H1V4h5v1zm8-4H9c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H9V9h5v1zm0-3H9V6h5v1zM6 9H1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1zm0 4H4v2H3v-2H1v-1h2v-2h1v2h2v1z"
      }
    />
  );
};