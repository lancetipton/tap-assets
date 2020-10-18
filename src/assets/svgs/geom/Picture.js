import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPicture = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M0 4v24h32V4zm4 20l6-14 5 8 3-4 6 10zM25 7a4 4 0 010 8 4 4 0 010-8"
      }
    />
  );
};
