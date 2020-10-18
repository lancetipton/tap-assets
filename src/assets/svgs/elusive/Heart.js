import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Heart = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M1176.629 250.347c54.502 168.4 8.89 339.762-87.232 468.871C1025.95 806.771 950.123 882.23 872.6 948.202c-71.322 66.39-230.932 197.753-273.24 201.403-37.394-7.15-79.353-49.433-109.04-71.197-166.817-126.809-346.39-281.02-437.442-449.629-76.34-161.87-76.48-362.086 42.333-486.189C249.27 3.702 481.533 30.841 599.36 175.944c31.643-41.05 70.555-73.335 116.736-96.853 187.213-74.728 381.972 1.418 460.533 171.256z"
      }
    />
  );
};
