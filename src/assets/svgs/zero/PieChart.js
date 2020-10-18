import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const PieChart = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M8.561 8.282l4.783-4.797A6.971 6.971 0 0114.998 8a6.973 6.973 0 01-1.923 4.811L8.561 8.282zm.595 6.614a7.164 7.164 0 003.027-1.34L6.998 8.355V1.079A6.995 6.995 0 001 7.97C1.016 11.831 4.142 15 7.998 15c.39 0 .771-.035 1.143-.102l.015-.002zm3.439-12.167A6.966 6.966 0 007.998 1v6.341l4.597-4.612z"
      }
    />
  );
};
