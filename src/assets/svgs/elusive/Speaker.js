import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Speaker = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M0 350.41h282.787L708.197 3.688v1192.623L282.787 849.59H0V350.41zm868.033-56.558c83.606 83.607 126.229 185.246 127.868 304.918 0 114.754-42.623 213.114-127.868 295.082l-86.066-88.524c59.017-59.017 88.525-128.688 88.525-209.017 0-81.967-29.509-153.278-88.525-213.934l86.066-88.525zm147.541-145.082C1138.524 271.721 1200 420.082 1200 593.852c0 173.771-61.476 322.951-184.426 447.541L924.59 950.41c98.361-96.721 147.541-215.164 147.541-355.327 0-140.164-49.18-259.427-147.541-357.788l90.984-88.525z"
      }
    />
  );
};
