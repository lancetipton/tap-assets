import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Plus = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8 1a7 7 0 10.001 14.001A7 7 0 008 1zm3.473 7.644l-2.83-.001v2.831A.655.655 0 018 12.14a.654.654 0 01-.643-.665V8.643h-2.83a.657.657 0 01-.668-.642.658.658 0 01.67-.642h2.828V4.528c0-.37.289-.667.643-.668a.655.655 0 01.643.667v2.832h2.83a.655.655 0 01.668.643.656.656 0 01-.668.642z"
      }
    />
  );
};
