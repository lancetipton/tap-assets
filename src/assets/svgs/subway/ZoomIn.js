import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgZoomIn = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M325.8 0C223 0 139.6 83.4 139.6 186.2c0 33.5 9 64.8 24.4 92L0 442.2l23.3 46.5L69.8 512l164-164c27.2 15.5 58.5 24.4 92 24.4C428.6 372.4 512 289 512 186.2S428.6 0 325.8 0zm0 314.2c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128zm23.3-197.8h-46.5v46.5H256v46.5h46.5V256H349v-46.5h46.5V163H349v-46.6z"
      }
    />
  );
};
