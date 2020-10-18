import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Contacts = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M19 3H8C6.346 3 5 4.346 5 6v1H4a1 1 0 100 2h1v2H4a1 1 0 100 2h1v2H4a1 1 0 100 2h1v1c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM7 6c0-.551.449-1 1-1v2H7V6zm0 3h1v2H7V9zm0 4h1v2H7v-2zm0 5v-1h1v2c-.551 0-1-.449-1-1zm13 0c0 .551-.449 1-1 1H9V5h10c.551 0 1 .449 1 1v12z"
      }
    />
  );
};
