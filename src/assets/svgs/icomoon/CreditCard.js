import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const CreditCard = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14.5 2h-13C.675 2 0 2.675 0 3.5v9c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5zm-13 1h13c.271 0 .5.229.5.5V5H1V3.5c0-.271.229-.5.5-.5zm13 10h-13a.507.507 0 01-.5-.5V8h14v4.5c0 .271-.229.5-.5.5zM2 10h1v2H2zm2 0h1v2H4zm2 0h1v2H6z"
      }
    />
  );
};
