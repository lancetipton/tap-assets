import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Mail = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M19 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2zm-9.684 7.316l1.602 1.4c.305.266.691.398 1.082.398s.777-.133 1.082-.398l1.602-1.4-.037.037 3.646 3.646H5.707l3.646-3.646-.037-.037zM5 17.293V10.54l3.602 3.151L5 17.293zm10.398-3.602L19 10.54v6.75l-3.602-3.599zM19 9v.21l-6.576 5.754a.68.68 0 01-.848 0L5 9.21V9h14z"
      }
    />
  );
};
