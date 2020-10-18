import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Child = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M604.73 0C469.353 0 359.597 110.317 359.597 246.429c0 136.114 109.764 246.47 245.131 246.47 135.375 0 245.09-110.35 245.09-246.47C849.819 110.314 740.103 0 604.729 0zM464.354 287.402h279.367c0 77.145-62.56 139.705-139.704 139.705-77.145 0-139.663-62.56-139.663-139.705zM412.08 531.738c-127.66 2.622-211.636 85.552-206.876 235.715L204.953 1200h146.944V811.356c1.272-34.026 51.242-45.945 57.673 0V1200h386.133V811.356c1.272-34.026 51.241-45.945 57.673 0V1200h141.671V767.453c-.858-118.72-49.571-236.815-205.58-235.715H412.081z"
      }
    />
  );
};
