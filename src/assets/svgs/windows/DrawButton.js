import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const DrawButton = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M38 20.583L53.833 38 33.25 58.583 15.833 41.167l8.313-8.313s18.208 5.542 20.187 1.584c3.167-4.75-4.75-5.938-4.75-4.355 1.584 1.584 2.771 3.563 2.771 3.563S22.167 33.25 19 25.333c-1.583-6.333 17.02-2.77 17.02-2.77l1.98-1.98zm-4.75 4.355s-9.896-.792-9.896.791c0 1.584 5.938 2.375 5.938 2.375l3.958-3.166zm20.583 11.479L42.75 23.75s8.79 6.229 10.292 6.73c1.187.395 3.958-1.98 7.125-.397 3.166 1.584 0 5.146 0 3.563 0-1.584-4.75-.396-4.75-.396 7.916 1.583 9.5 4.75 7.916 6.333-1.583 1.584-3.562 1.584-3.562 0 0-1.583-5.938-3.166-5.938-3.166z"
      }
    />
  );
};
