import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const RemoveCircle = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M600 0C268.63 0 0 268.63 0 600c0 331.369 268.63 600 600 600 331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629 0 259.305-210.187 469.556-469.556 469.556-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zM435.425 305.347L305.347 435.425 469.922 600 305.347 764.575l130.078 130.078L600 730.078l164.575 164.575 130.078-130.078L730.078 600l164.575-164.575-130.078-130.078L600 469.922 435.425 305.347z"
      }
    />
  );
};
