import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgQrcode = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 1200 1200"}
      delta={
        "M0 0v545.313h545.313V0H0zm654.688 0v545.313H1200V0H654.688zM108.594 108.594h328.125v328.125H108.594V108.594zm654.687 0h328.125v328.125H763.281V108.594zM217.969 219.531v108.594h110.156V219.531H217.969zm653.906 0v108.594h108.594V219.531H871.875zM0 654.688V1200h545.313V654.688H0zm654.688 0V1200h108.594V873.438h108.594v108.594H1200V654.688h-108.594v108.594H980.469V654.688H654.688zM108.594 763.281h328.125v328.125H108.594V763.281zm109.375 108.594v110.156h110.156V871.875H217.969zm653.906 219.531V1200h108.594v-108.594H871.875zm219.531 0V1200H1200v-108.594h-108.594z"
      }
    />
  );
};