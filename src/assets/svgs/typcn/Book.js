import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgBook = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M18 3H7a.997.997 0 00-.707.293l-3 3-.057.062a.996.996 0 00-.235.6L3 7.008V18c0 1.654 1.346 3 3 3h9a3.006 3.006 0 002.829-2h.671c1.402 0 2.5-1.317 2.5-3V6c0-1.654-1.346-3-3-3zM6 19c-.551 0-1-.448-1-1V8h2v11H6zm10-1c0 .552-.449 1-1 1H8V8h7c.551 0 1 .448 1 1v9zm3-2c0 .62-.324 1-.5 1H18V9c0-1.654-1.346-3-3-3H6.414l1-1H18c.551 0 1 .448 1 1v10z"
      }
    />
  );
};