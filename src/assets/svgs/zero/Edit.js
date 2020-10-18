import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Edit = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M13.482 3.021l-.567-.565a1.554 1.554 0 00-2.198-.001L3.545 9.626c-.214.215-1.013 3.231-1.065 3.302l-.198.793.792-.199c.069-.052 3.085-.853 3.3-1.066l7.172-7.173c.303-.303.455-.703.454-1.099.001-.395-.216-.862-.518-1.163zm-7.803 8.741c.013.063-2.348.907-2.354.901.006.006.852-2.354.915-2.344l5.454-5.454 1.441 1.44-5.456 5.457zm7.173-7.173L11.83 5.611l-1.439-1.44 1.021-1.022a.575.575 0 01.81 0l.565.566c.112.114.232.321.231.469a.557.557 0 01-.166.405z"
      }
    />
  );
};
