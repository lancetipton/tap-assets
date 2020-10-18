import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SafetyCone = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M97.017 82.01v-4.62h-.002l.002-.018a2.437 2.437 0 00-2.42-2.417v-.003h-7.512l-33.037-57.22-.013.008c-.732-1.503-2.26-2.547-4.044-2.547a4.505 4.505 0 00-4.108 2.665L12.92 74.951H5.386a2.439 2.439 0 00-2.44 2.438v4.863h.012c-.002.039-.012.075-.012.114a2.44 2.44 0 002.44 2.439h89.21v-.004c.013 0 .024.004.037.003a2.44 2.44 0 002.42-2.458c0-.114-.02-.224-.036-.336zM47.513 25.159h4.977l5.748 9.957H41.765l5.748-9.957zM36.017 45.072h27.971l5.748 9.957H30.268l5.749-9.957zM18.766 74.951l5.748-9.957H75.49l5.748 9.957H18.766z"
      }
    />
  );
};
