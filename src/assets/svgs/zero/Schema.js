import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgSchema = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 16 16"}
      delta={
        "M13.808 3.213a.416.416 0 00-.244-.093L7.603 1.017a.395.395 0 00-.226 0L1.416 3.12a.398.398 0 00-.231.093.54.54 0 00-.185.395v8.109c0 .229.149.428.344.484l5.975 2.031a.386.386 0 00.054.019l.018.006a.416.416 0 00.225 0l.024-.008.029-.011 5.986-2.037a.5.5 0 00.345-.483v-8.11a.55.55 0 00-.192-.395zM7.489 2.018l4.444 1.622-4.435 1.546-2.864-.996-1.509-.534 4.364-1.638zM2 4.305l2.893 1.021L7 6.103v7.026L2 11.33V4.305zm6 8.824V6.103l2.562-.945L13 4.297v7.033l-5 1.799z"
      }
    />
  );
};
