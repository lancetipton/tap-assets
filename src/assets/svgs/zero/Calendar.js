import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Calendar = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M13 6v7H4V6h9m0-1H4a1 1 0 00-1 1v7a1 1 0 001 1h9a1 1 0 001-1V6a1 1 0 00-1-1zm.5-2H12v-.5a.5.5 0 00-1 0V3H6v-.5a.5.5 0 00-1 0V3H3.5a.5.5 0 000 1h10a.5.5 0 000-1zM6 7H5v1h1V7zm2 0H7v1h1V7zm2 0H9v1h1V7zm2 0h-1v1h1V7zM6 9H5v1h1V9zm2 0H7v1h1V9zm2 0H9v1h1V9zm2 0h-1v1h1V9zm-6 2H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1zm2 0h-1v1h1v-1z"
      }
    />
  );
};
