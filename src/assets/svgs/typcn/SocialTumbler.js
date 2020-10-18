import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SocialTumbler = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 24 24"}
      delta={
        "M15.527 17.921v-2.066c-.669.448-1.32.67-1.952.67-.298 0-.631-.094-1.004-.277-.223-.151-.354-.317-.393-.503-.11-.224-.178-.708-.178-1.454V11h3V9h-3V5.644h-1.772c-.149.782-.298 1.338-.448 1.673-.184.41-.482.782-.891 1.116a4 4 0 01-1.285.725V11H9v4.521c0 .52.073.964.223 1.337.111.298.334.595.671.893.259.262.631.484 1.115.67.595.15 1.114.223 1.562.223.52 0 1.004-.056 1.45-.167a5.75 5.75 0 001.506-.556"
      }
    />
  );
};
