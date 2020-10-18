import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const Stackoverflow = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 114"}
      delta={
        "M112.963 105.623c-6.248 0-11.14-1.43-15.204-5.343l3.612-3.613c2.936 3.085 6.925 4.29 11.517 4.29 6.096 0 9.86-2.183 9.86-6.549 0-3.236-1.883-5.042-6.173-5.419l-6.096-.526c-7.226-.603-11.064-3.839-11.064-9.935 0-6.774 5.72-10.838 13.623-10.838 5.268 0 10.01 1.28 13.322 3.988l-3.538 3.537c-2.634-2.03-6.02-2.935-9.86-2.935-5.419 0-8.279 2.334-8.279 6.097 0 3.161 1.806 5.043 6.473 5.419l5.946.527c6.473.602 10.913 3.085 10.913 10.01 0 7.15-6.096 11.29-15.052 11.29M144.495 105.172c-6.323 0-9.484-4.442-9.484-9.935v-22.73h-4.666v-4.14h4.666v-11.59h5.42v11.59h7.902v4.14h-7.903v22.579c0 3.387 1.581 5.419 5.043 5.419h2.86v4.667h-3.838M176.359 88.086h-10.387c-5.57 0-8.28 2.259-8.28 6.548 0 4.29 2.635 6.323 8.506 6.323 3.161 0 5.945-.227 8.279-2.484 1.28-1.204 1.882-3.312 1.882-6.398v-3.989zm0 17.086v-3.538c-3.011 3.011-5.72 3.989-10.688 3.989-5.118 0-8.129-.978-10.463-3.386-1.805-1.808-2.784-4.592-2.784-7.528 0-6.472 4.516-10.688 12.795-10.688h11.14v-3.537c0-5.418-2.71-8.128-9.484-8.128-4.741 0-7.15 1.13-9.333 4.215l-3.688-3.387c3.312-4.29 7.075-5.494 13.097-5.494 9.934 0 14.826 4.29 14.826 12.342v25.14h-5.418zM203.002 105.623c-9.333 0-16.408-6.323-16.408-18.967 0-12.644 7.075-18.966 16.408-18.966 5.118 0 8.354 1.354 12.192 5.494l-3.687 3.462c-2.785-3.086-4.968-4.139-8.505-4.139-3.613 0-6.623 1.43-8.58 4.215-1.731 2.408-2.409 5.269-2.409 9.934 0 4.666.678 7.527 2.409 9.935 1.957 2.785 4.967 4.215 8.58 4.215 3.537 0 5.72-1.129 8.505-4.215l3.687 3.538c-3.838 4.138-7.074 5.494-12.192 5.494M244.861 105.172L233.12 86.204l-7.225 8.28v10.688h-5.419v-53.59h5.42v35.826l16.708-19.267h6.774l-12.57 14.15 14.752 22.88h-6.698M273.417 77.59c-1.07-1.07-2.497-1.64-4.351-1.64-1.855 0-3.21.57-4.28 1.64-1.927 1.926-2.14 5.135-2.14 8.988 0 3.852.213 7.133 2.14 9.058 1.07 1.07 2.425 1.641 4.28 1.641 1.854 0 3.281-.57 4.351-1.641 1.925-1.925 2.14-5.206 2.14-9.058 0-3.853-.215-7.062-2.14-8.988zm7.204 23.468c-2.283 2.425-6.063 4.565-11.555 4.565-5.493 0-9.202-2.14-11.485-4.565-3.352-3.495-4.208-7.705-4.208-14.48 0-6.705.856-10.914 4.208-14.41 2.283-2.425 5.992-4.565 11.485-4.565 5.492 0 9.272 2.14 11.555 4.565 3.353 3.496 4.21 7.705 4.21 14.41 0 6.775-.857 10.985-4.21 14.48zM305.67 105.195h-7.275L284.699 68.03h9.772l7.562 22.97 7.49-22.97h9.771l-13.623 37.164M341.276 79.159c-.998-2.211-3.067-3.852-6.207-3.852-3.137 0-5.207 1.64-6.204 3.852-.572 1.355-.786 2.353-.857 3.995h14.124c-.072-1.642-.285-2.64-.856-3.995zm-13.268 10.343c0 4.78 2.925 8.274 8.132 8.274 4.066 0 6.063-1.14 8.418-3.495l5.635 5.492c-3.781 3.78-7.42 5.85-14.124 5.85-8.774 0-17.191-3.994-17.191-19.045 0-12.127 6.562-18.975 16.191-18.975 10.344 0 16.193 7.561 16.193 17.762v4.137h-23.254zM376.068 78.16c-1.427-1.427-2.639-2.21-4.921-2.21-2.854 0-5.993 2.139-5.993 6.847v22.398h-9.273V68.03h9.06v3.567c1.782-2.14 5.35-3.995 9.344-3.995 3.638 0 6.205.927 8.774 3.496l-6.99 7.061M420.844 105.195c-7.632 0-10.842-5.35-10.842-10.629V52.825h9.273v41.17c0 2.212.927 3.353 3.28 3.353h3.567v7.847h-5.278zm-22.1-30.087v30.087h-9.273V75.108h-3.851v-7.06h3.851V63.41c0-5.278 3.281-10.628 10.842-10.628h5.28v7.846h-3.568c-2.21 0-3.28 1.213-3.28 3.353v4.066h6.847v7.061h-6.847zM447.497 77.59c-1.07-1.07-2.497-1.64-4.352-1.64-1.854 0-3.21.57-4.28 1.64-1.926 1.926-2.14 5.135-2.14 8.988 0 3.852.214 7.133 2.14 9.058 1.07 1.07 2.426 1.641 4.28 1.641 1.855 0 3.282-.57 4.352-1.641 1.925-1.925 2.14-5.206 2.14-9.058 0-3.853-.215-7.062-2.14-8.988zm7.204 23.468c-2.283 2.425-6.064 4.565-11.556 4.565-5.492 0-9.2-2.14-11.484-4.565-3.352-3.495-4.209-7.705-4.209-14.48 0-6.705.857-10.914 4.21-14.41 2.282-2.425 5.99-4.565 11.483-4.565 5.492 0 9.273 2.14 11.556 4.565 3.353 3.496 4.21 7.705 4.21 14.41 0 6.775-.857 10.985-4.21 14.48zM500.524 105.195h-7.632l-7.775-23.325-7.775 23.325h-7.632L458.297 68.03h9.844l5.99 22.97 7.563-22.97h6.775l7.633 22.97 5.992-22.97h9.772l-11.342 37.164"
      }
    />
  );
};
