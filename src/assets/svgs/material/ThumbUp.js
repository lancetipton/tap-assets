import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const ThumbUp = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 48 48"}
      delta={
        "M2 42h8V18H2v24zm44-22c0-2.21-1.79-4-4-4H29.37l1.91-9.14c.04-.2.07-.41.07-.63 0-.83-.34-1.58-.88-2.12L28.34 2 15.17 15.17C14.45 15.9 14 16.9 14 18v20c0 2.21 1.79 4 4 4h18c1.66 0 3.08-1.01 3.68-2.44l6.03-14.1A4 4 0 0046 24v-3.83l-.02-.02L46 20z"
      }
    />
  );
};
