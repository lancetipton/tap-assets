import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgExport = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M8 16.5v.5c1.691-2.578 3.6-3.953 6-4v3c0 .551.511 1 1.143 1 .364 0 .675-.158.883-.391C17.959 14.58 22 10.5 22 10.5s-4.041-4.082-5.975-6.137A1.262 1.262 0 0015.143 4C14.511 4 14 4.447 14 5v3c-4.66 0-6 4.871-6 8.5zM5 21h14a1 1 0 001-1v-6.046c-.664.676-1.364 1.393-2 2.047V19H6V7h7V5H5a1 1 0 00-1 1v14a1 1 0 001 1z"
      }
    />
  );
};
