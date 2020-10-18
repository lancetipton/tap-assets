import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Cancel = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711A4.943 4.943 0 0112 17c-2.757 0-5-2.243-5-5zm9.416 2.295L9.705 7.584A4.943 4.943 0 0112 7c2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z"
      }
    />
  );
};
