import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Info = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M50 12.5c-20.712 0-37.5 16.793-37.5 37.502C12.5 70.712 29.288 87.5 50 87.5s37.5-16.788 37.5-37.498C87.5 29.293 70.712 12.5 50 12.5zm3.826 58.36c0 .72-.584 1.304-1.304 1.304h-5.044c-.72 0-1.304-.583-1.304-1.304V46.642c0-.72.584-1.304 1.304-1.304h5.044c.72 0 1.304.583 1.304 1.304V70.86zm-3.857-30.927c-2.47 0-4.518-2.048-4.518-4.579a4.512 4.512 0 014.518-4.518c2.531 0 4.579 1.987 4.579 4.518a4.576 4.576 0 01-4.579 4.579z"
      }
    />
  );
};
