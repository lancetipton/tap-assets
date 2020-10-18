import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Envelop = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M14.5 2h-13C.675 2 0 2.675 0 3.5v10c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-10c0-.825-.675-1.5-1.5-1.5zM6.23 8.6L2 11.895V4.057L6.23 8.6zM2.756 4h10.488L8 7.938 2.756 4zm3.639 4.777L8 10.5l1.605-1.723L12.895 13h-9.79l3.29-4.223zM9.77 8.6L14 4.057v7.838L9.77 8.6z"
      }
    />
  );
};
