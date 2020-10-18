import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Basket = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M3.97 0c-.13.01-.26.08-.34.19L1.29 3H.01v1h1v3.66c0 .18.16.34.34.34h5.31c.18 0 .34-.16.34-.34V4h1V3H6.72C6.45 2.67 4.33.14 4.31.12c-.11-.09-.22-.14-.34-.13zM4 1.28L5.44 3H2.56L4 1.28zM2.5 5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5S2 6.78 2 6.5v-1c0-.28.22-.5.5-.5zm3 0c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5S5 6.78 5 6.5v-1c0-.28.22-.5.5-.5z"
      }
    />
  );
};
