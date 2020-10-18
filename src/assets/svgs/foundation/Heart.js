import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgHeart = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M67.607 13.462A22.1 22.1 0 0050 22.136a22.098 22.098 0 00-17.61-8.674c-12.266 0-22.283 10.013-22.33 22.32-.046 13.245 6.359 21.054 11.507 27.331l1.104 1.349c6.095 7.515 24.992 21.013 25.792 21.584a2.654 2.654 0 003.077 0c.8-.571 19.697-14.069 25.792-21.584l1.103-1.349c5.147-6.277 11.553-14.086 11.507-27.331-.048-12.307-10.066-22.32-22.335-22.32z"
      }
    />
  );
};
