import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const IosLocked = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M360 224v-72c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224h-56zm-96 126.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 0-17.673 14.327-32 32-32s32 14.327 32 32c0 14.91-10.198 27.439-24 30.992zM344 224H168v-72c0-48.523 39.484-88 88.016-88C304.531 64 344 103.477 344 152v72z"
      }
    />
  );
};
