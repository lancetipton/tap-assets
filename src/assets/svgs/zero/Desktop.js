import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Desktop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14 1H2c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h6v2H6.3c-.2 0-.3.2-.3.5s.1.5.3.5h4.4c.2 0 .3-.2.3-.5s-.1-.5-.3-.5H9v-2h5c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm0 10H2v-1h12v1zM2 9V2h12v7H2z"
      }
    />
  );
};
