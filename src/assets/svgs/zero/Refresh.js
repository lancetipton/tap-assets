import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Refresh = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M15.814 7.667l-2.32 2.32c-.119.118-.281.186-.449.186s-.328-.067-.449-.186l-2.318-2.32a.635.635 0 11.898-.898l1.234 1.237V8a5.575 5.575 0 00-5.57-5.57C3.769 2.43 1.269 4.928 1.269 8s2.5 5.57 5.571 5.57a5.542 5.542 0 003.941-1.631.633.633 0 11.896.896 6.789 6.789 0 01-4.837 2.004C3.068 14.838 0 11.771 0 8s3.068-6.84 6.84-6.84A6.847 6.847 0 0113.68 8v.006l1.236-1.237a.635.635 0 11.898.898z"
      }
    />
  );
};
