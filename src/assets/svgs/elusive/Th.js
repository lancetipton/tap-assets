import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgTh = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M0 0v300h300V0H0zm450 0v300h300V0H450zm450 0v300h300V0H900zM0 450v300h300V450H0zm450 0v300h300V450H450zm450 0v300h300V450H900zM0 900v300h300V900H0zm450 0v300h300V900H450zm450 0v300h300V900H900z"
      }
    />
  );
};
