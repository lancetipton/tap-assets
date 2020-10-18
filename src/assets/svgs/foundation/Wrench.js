import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Wrench = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M86.257 23.405l-3.866 3.866-3.737 3.737-4.759 4.759a9.08 9.08 0 01-9.663-9.663l4.759-4.759 3.737-3.737 3.866-3.866a.645.645 0 000-.911c-.046-.046-.101-.074-.155-.103l.001-.001-.01-.004a.649.649 0 00-.102-.043 21.424 21.424 0 00-8.749-1.878c-11.939 0-21.618 9.679-21.618 21.618 0 2.28.358 4.475 1.012 6.538L24.428 61.504c-7.545.122-13.627 6.267-13.627 13.842 0 7.65 6.203 13.853 13.853 13.853 7.574 0 13.72-6.083 13.842-13.628l22.546-22.546a21.602 21.602 0 006.539 1.012c11.939 0 21.618-9.679 21.618-21.618 0-3.118-.686-6.066-1.877-8.742a.605.605 0 00-.05-.118l-.022-.052-.007.007c-.024-.037-.041-.078-.074-.111a.646.646 0 00-.912.002zM30.378 75.346a5.724 5.724 0 11-11.449 0 5.724 5.724 0 0111.449 0z"
      }
    />
  );
};
