import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const CodeBadge = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 32 32"}
      delta={
        "M21.652 3.098H4.697v26.375h22.607V8.75l-5.652-5.652zm3.768 24.491H6.581V4.982h13.188l5.652 5.652v16.955zM12.269 11.851l-3.644 4.434 3.644 4.434.862-1.417-2.455-3.017 2.455-3.017zm1.594 8.763h1.599l2.542-8.681h-1.599zm5.868-8.763l-.862 1.418 2.455 3.017-2.455 3.017.862 1.418 3.644-4.434z"
      }
    />
  );
};
