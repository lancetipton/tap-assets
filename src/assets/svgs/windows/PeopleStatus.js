import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPeopleStatus = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 76 76"}
      delta={
        "M53.833 58.583h-7.916A1.583 1.583 0 0144.333 57v-7.917c0-.874.71-1.583 1.584-1.583h7.916c.875 0 1.584.709 1.584 1.583V57c0 .874-.71 1.583-1.584 1.583zM38 17.417a7.917 7.917 0 110 15.833 7.917 7.917 0 010-15.833zm-7.917 26.916c-1.055.528-3.166 4.75-3.166 4.75S25.86 50.667 25.333 57l-4.75-1.583 1.584-7.917s3.166-11.083 9.5-11.083h12.666c4.099 0 6.87 4.64 8.317 7.916h-8.317a3.167 3.167 0 00-3.166 3.167v12.536l-2.375.13a21.29 21.29 0 01-9.315-2.13l.606-13.703z"
      }
    />
  );
};
