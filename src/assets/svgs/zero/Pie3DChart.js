import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Pie3DChart = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M6.998 8.355l5.186 5.201a7.164 7.164 0 01-3.027 1.34l-.016.002A6.428 6.428 0 017.998 15C4.142 15 1.016 11.831 1 7.97c.015-3.512 2.617-6.405 5.998-6.891v7.276zm1.563-.073l4.515 4.528a6.975 6.975 0 001.923-4.811H8.842l-.281.283zM8 3h2v1H8v1h2v1H8v1h3V2H8v1zm5 0h1V2h-2v5h2V6h-1V3zm1 0v3h1V3h-1z"
      }
    />
  );
};
