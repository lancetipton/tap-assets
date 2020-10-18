import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Simpleicons = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M10 15h3v1H3v-1h3v-4h1v4h2v-4h1v4zm-6-3.02V12c0 .74.2 1.432.552 2.027H3.43A4.944 4.944 0 013 12v-.02h1zM8 7a5.002 5.002 0 014.57 7.027h-1.12A4.001 4.001 0 008.002 8V7zm3 3H5v1h6v-1zM8 8C5.792 8 4 6.208 4 4s1.792-4 4-4 4 1.792 4 4h-1a3.001 3.001 0 00-6 0c0 1.656 1.344 3 3 3v1zm0-6a2 2 0 11-.001 4.001A2 2 0 018 2zm0 1a1 1 0 110 2 1 1 0 010-2z"
      }
    />
  );
};
