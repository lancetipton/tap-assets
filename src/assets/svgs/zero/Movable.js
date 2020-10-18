import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Movable = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M6 2H5V1h1v1zm2-1H7v1h1V1zm2 0H9v1h1V1zM6 3H5v1h1V3zm2 0H7v1h1V3zm2 0H9v1h1V3zM6 5H5v1h1V5zm2 0H7v1h1V5zm2 0H9v1h1V5zM6 7H5v1h1V7zm2 0H7v1h1V7zm2 0H9v1h1V7zM6 9H5v1h1V9zm2 0H7v1h1V9zm2 0H9v1h1V9zm-4 2H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1zm-4 2H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1z"
      }
    />
  );
};
