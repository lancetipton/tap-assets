import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Map = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 100 100"}
      delta={
        "M91.967 7.961c0-.016.005-.031.005-.047a2.733 2.733 0 00-2.73-2.733H39.559v.011L8.031 36.721h-.003v55.365h.003v.001a2.735 2.735 0 002.734 2.731h78.479a2.73 2.73 0 002.663-2.15h.06v-.536c0-.015.004-.029.004-.044s-.004-.029-.004-.044V7.961zm-24.328 7.177H82.01v24.597L63.897 21.621l3.742-6.483zM39.57 39.453v-.001a2.732 2.732 0 002.722-2.73V15.138H61.88l-27.17 47.06-16.725-16.725v-6.02H39.57zM17.985 84.862V52.527L32.128 66.67 21.626 84.862h-3.641zm9.4 0l33.93-58.769 20.696 20.696v38.073H27.385z"
      }
    />
  );
};
