import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgPlayground = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M7.206 31.141c2.885 0 5.219-2.399 5.219-5.368 0-2.953-2.334-5.353-5.219-5.353C4.333 20.42 2 22.82 2 25.773c0 2.968 2.333 5.368 5.206 5.368zm29.23 9.216a.53.53 0 01.741.117l.965 1.372a.578.578 0 01-.116.766l-7.08 5.287a.536.536 0 01-.743-.118l-.962-1.372a.575.575 0 01.116-.764l7.079-5.288zm-8.003-6.817l-2.808-5.063-1.474 1.107 2.808 5.09zm-6.551-11.827L10.962 2l-2.089.014 11.522 20.82zm10.281 10.43C32.78 31.682 34.192 31 35 31h10c1.974 0 3 1.986 3 4.004C48 37.034 46.974 38 45 38h-9l-10.836 8.502c-3.808 2.819-6.116-.278-6.116-.278l-8.483-8.729c-1.423-1.753-1.115-5.089.591-6.566l11.739-8.597c1.166-1 2.897-.843 3.885.343.976 1.2.822 2.994-.346 3.996l-7.515 5.657 5.399 5.484 7.845-5.669z"
      }
    />
  );
};