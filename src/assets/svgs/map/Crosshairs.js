import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgCrosshairs = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M25 1C11.766 1 1 11.766 1 25c0 13.233 10.766 24 24 24 13.233 0 24-10.767 24-24C49 11.766 38.233 1 25 1zm3 43.75V36h-6v8.75C13.375 43.443 6.557 36.625 5.25 28H14v-6H5.25C6.557 13.375 13.375 6.557 22 5.25V14h6V5.25C36.625 6.557 43.443 13.375 44.75 22H36v6h8.75C43.443 36.625 36.625 43.443 28 44.75z"
      }
    />
  );
};
