import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Video = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M22.525 7.149a.997.997 0 00-.972-.044L19 8.382V8c0-1.654-1.346-3-3-3H5C3.346 5 2 6.346 2 8v8c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-.382l2.553 1.276a.992.992 0 00.972-.043c.295-.183.475-.504.475-.851V8c0-.347-.18-.668-.475-.851zM7 13.5a1.5 1.5 0 11-.001-2.999A1.5 1.5 0 017 13.5z"
      }
    />
  );
};
