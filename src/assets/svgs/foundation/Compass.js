import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Compass = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M50 12.5c-20.712 0-37.5 16.793-37.5 37.502C12.5 70.712 29.288 87.5 50 87.5s37.5-16.788 37.5-37.498C87.5 29.293 70.712 12.5 50 12.5zm0 65.06c-15.199 0-27.56-12.362-27.56-27.558C22.44 34.807 34.801 22.44 50 22.44c15.198 0 27.56 12.367 27.56 27.562C77.56 65.198 65.198 77.56 50 77.56z"
      }
    />
  );
};
