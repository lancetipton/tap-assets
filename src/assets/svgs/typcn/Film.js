import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Film = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M8 8v7h8V8H8zm7 6H9V9h6v5zm2-12h-3v2h-4V2H7C5.346 2 4 3.346 4 5v13c0 1.654 1.346 3 3 3h3v-2h4v2h3c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zm1 4a1 1 0 100 2v1a1 1 0 100 2v1a1 1 0 100 2v1a1 1 0 100 2v1c0 .551-.448 1-1 1h-1v-2H8v2H7c-.552 0-1-.449-1-1v-1a1 1 0 100-2v-1a1 1 0 100-2v-1a1 1 0 100-2V8a1 1 0 100-2V5c0-.551.448-1 1-1h1v2h8V4h1c.552 0 1 .449 1 1v1z"
      }
    />
  );
};
