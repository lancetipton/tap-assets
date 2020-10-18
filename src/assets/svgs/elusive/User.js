import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const User = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M939.574 858.383c-157.341-57.319-207.639-105.702-207.639-209.298 0-62.17 51.554-102.462 69.128-155.744 17.575-53.283 27.741-116.367 36.191-162.256 8.451-45.889 11.809-63.638 16.404-112.532C859.276 157.532 818.426 0 600 0 381.639 0 340.659 157.532 346.404 218.553c4.596 48.894 7.972 66.645 16.404 112.532 8.433 45.888 18.5 108.969 36.063 162.256 17.563 53.286 69.191 93.574 69.191 155.744 0 103.596-50.298 151.979-207.638 209.298C102.511 915.83 0 972.479 0 1012.5V1200h1200v-187.5c0-39.957-102.574-96.606-260.426-154.117z"
      }
    />
  );
};
