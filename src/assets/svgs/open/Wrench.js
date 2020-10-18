import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Wrench = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 8 8"}
      delta={
        "M5.5 0A2.5 2.5 0 003 2.5c0 .32.08.62.19.91L.28 6.29c-.39.39-.39 1.05 0 1.44.2.2.46.28.72.28.26 0 .52-.09.72-.28L4.6 4.82c.28.11.58.19.91.19a2.5 2.5 0 002.5-2.5c0-.16 0-.32-.03-.47l-.97.97h-2v-2l.97-.97C5.83.01 5.67.01 5.51.01zM1 6.5c.28 0 .5.22.5.5s-.22.5-.5.5S.5 7.28.5 7s.22-.5.5-.5z"
      }
    />
  );
};
