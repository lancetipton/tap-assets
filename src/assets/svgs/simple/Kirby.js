import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgKirby = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 0L.952 4v8L8 16l7.048-4V4L8 0zm3.14 8.17L9.165 9.235v.146h1.976v1.542H4.854V9.382H6.83v-.146L4.855 8.17V6.26l3.144 1.695 3.144-1.696v1.91z"
      }
    />
  );
};
