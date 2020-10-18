import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Library = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 50 50"}
      delta={
        "M25.154 17.347c3.953 0 7.144-3.217 7.144-7.183 0-3.958-3.19-7.164-7.144-7.164-3.948 0-7.153 3.207-7.153 7.164 0 3.965 3.206 7.183 7.153 7.183zM32.105 19c3.271 0 4.644 2.794 4.644 2.794l10.557 14.545c.437.649.694 1.443.694 2.3 0 2.26-1.828 4.097-4.081 4.097a4.23 4.23 0 01-1.519-.295L36 40.667V47H14v-6.333l-6.402 1.777c-.45.176-.968.296-1.509.296a4.093 4.093 0 01-4.088-4.09c0-.856.253-1.637.706-2.288l10.55-14.568S14.629 19 17.886 19h14.219zm-7.099 23.588l8.246-2.74-.179-.05c-5.705-1.672-3.518-9.228 2.173-7.537l.754.268v-8.521l-10.989 3.623L14 24.008v8.521l.754-.269c5.688-1.69 7.898 5.865 2.197 7.537l-.2.05 8.255 2.741z"
      }
    />
  );
};
