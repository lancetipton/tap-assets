import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Checkbox = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M92.038 24.333l-8.62-8.622a1.615 1.615 0 00-2.282 0L49.987 46.86l-6.07-6.068a1.614 1.614 0 00-2.282 0l-8.622 8.622a1.611 1.611 0 000 2.282l15.782 15.778c.302.302.712.473 1.141.473.019 0 .037-.01.056-.01.016 0 .033.009.05.009a1.61 1.61 0 001.141-.473l40.855-40.857c.63-.632.63-1.653 0-2.283z"
      }
    />
  );
};
