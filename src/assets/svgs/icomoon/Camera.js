import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCamera = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M4.75 9.5a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM15 4h-3.5c-.25-1-.5-2-1.5-2H6C5 2 4.75 3 4.5 4H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-7 9.938a4.438 4.438 0 110-8.876 4.438 4.438 0 010 8.876zM15 7h-2V6h2v1z"
      }
    />
  );
};