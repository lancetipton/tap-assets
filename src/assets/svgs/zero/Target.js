import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTarget = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14.5 7h-1.551A4.973 4.973 0 008.5 2.551V1.5a.5.5 0 00-1 0v1.051A4.973 4.973 0 003.051 7H1.5a.5.5 0 000 1h1.551A4.973 4.973 0 007.5 12.449V14.5a.5.5 0 001 0v-2.051A4.973 4.973 0 0012.949 8H14.5a.5.5 0 000-1zm-2.551 0H8.5V3.55A3.975 3.975 0 0111.949 7zM7.5 3.55V7H4.05A3.978 3.978 0 017.5 3.55zM4.05 8H7.5v3.45A3.978 3.978 0 014.05 8zm4.45 3.45V8h3.449A3.975 3.975 0 018.5 11.45z"
      }
    />
  );
};
