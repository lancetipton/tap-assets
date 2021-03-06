import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ListStar = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M36.5 45h9.786l3.214-9 3.214 9H62.5l-8.15 5.839L58 60l-8.5-5-7.5 5 2.825-9.025L36.5 45zM19 23h8v8h-8v-8zm0 11h8v8h-8v-8zm12-11h26v8H31v-8zM19 45h8v8h-8v-8zm12-11h18.146l-3.108 8H31v-8zm26 0v8h-4.038l-3.108-8H57zM31 45h3.786l8.85 6.64L42.79 53H31v-8z"
      }
    />
  );
};
