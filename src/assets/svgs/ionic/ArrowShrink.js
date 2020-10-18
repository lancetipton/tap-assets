import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ArrowShrink = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 512"}
      delta={
        "M448 92.3l-81.9 81.8L416 224H288V96l49.9 49.9L419.7 64zm0 327.4l-81.9-81.8L416 288H288v128l49.9-49.9 81.8 81.9zm-384 0l81.9-81.8L96 288h128v128l-49.9-49.9L92.3 448zm0-327.4l81.9 81.8L96 224h128V96l-49.9 49.9L92.3 64z"
      }
    />
  );
};
