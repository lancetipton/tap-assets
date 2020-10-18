import React from "react";
import { SvgIcon } from "@keg-hub/keg-components";
export const SvgLoggly = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox={"0 0 512 171"}
      delta={
        "M123.957 77.015c-.68-3.606-1.835-6.732-3.444-9.391-1.625-2.66-3.776-4.732-6.467-6.226-2.697-1.495-6.076-2.24-10.159-2.24-3.636 0-6.801.676-9.532 2-2.718 1.325-4.96 3.279-6.715 5.837-1.741 2.56-3.046 5.647-3.932 9.235-.876 3.603-1.305 7.71-1.305 12.32 0 4.273.348 8.21 1.066 11.812.706 3.596 1.862 6.738 3.446 9.394 1.593 2.657 3.745 4.719 6.465 6.178 2.729 1.461 6.096 2.189 10.12 2.189 3.685 0 6.892-.668 9.62-2.001 2.731-1.325 4.961-3.249 6.715-5.79 1.752-2.53 3.045-5.585 3.883-9.191.839-3.597 1.264-7.702 1.264-12.302 0-4.287-.346-8.227-1.025-11.824zm14.442 46.846c-3.953 4.409-8.911 7.815-14.87 10.222-5.963 2.4-12.937 3.596-20.905 3.596-7.71 0-14.424-1.066-20.132-3.209-5.708-2.143-10.438-5.261-14.192-9.344-3.769-4.083-6.555-9.103-8.368-15.082-1.815-5.967-2.708-12.778-2.708-20.428 0-7.399.974-14.155 2.956-20.29 1.983-6.128 4.94-11.384 8.895-15.758 3.954-4.382 8.905-7.778 14.832-10.169 5.928-2.4 12.88-3.596 20.846-3.596 7.79 0 14.524 1.046 20.229 3.157 5.708 2.102 10.422 5.21 14.148 9.293 3.733 4.085 6.504 9.115 8.315 15.082 1.815 5.967 2.72 12.82 2.72 20.527 0 7.389-.967 14.145-2.916 20.238-1.946 6.098-4.894 11.35-8.85 15.76zm74-62.853c-2.602-2.588-6.266-3.883-10.99-3.883-2.397 0-4.5.397-6.324 1.214-1.811.808-3.314 1.902-4.522 3.297-1.202 1.405-2.09 3.02-2.68 4.872a19.301 19.301 0 00-.863 5.786c0 4.413 1.293 7.9 3.883 10.461 2.6 2.557 6.185 3.842 10.795 3.842 2.462 0 4.605-.386 6.416-1.177 1.813-.765 3.316-1.843 4.522-3.203 1.194-1.356 2.102-2.93 2.721-4.722.616-1.785.925-3.637.925-5.589 0-4.672-1.297-8.298-3.883-10.898zm-28.877 83.295c0 3.23 1.633 5.698 4.904 7.387 3.272 1.682 7.887 2.529 13.861 2.529 3.686 0 6.792-.377 9.325-1.124 2.529-.747 4.571-1.736 6.133-2.97 1.554-1.233 2.652-2.597 3.31-4.134.637-1.52.965-3.126.965-4.808 0-2.928-1.167-5.16-3.498-6.713-2.339-1.566-5.536-2.402-9.62-2.53l-17.414-.489c-1.694 1.234-3.027 2.408-4.03 3.557-1.01 1.125-1.824 2.216-2.441 3.247-.607 1.035-1.017 2.054-1.216 3.027-.19.966-.279 1.975-.279 3.02zM243.99 60.52h-10.206c1.432 1.562 2.452 3.326 3.063 5.307.623 1.974.92 4.036.92 6.18 0 5.057-.837 9.55-2.53 13.476-1.672 3.922-4.092 7.232-7.23 9.91-3.146 2.696-6.952 4.75-11.377 6.134-4.45 1.408-9.382 2.092-14.839 2.092-2.78 0-5.439-.34-7.972-1.016-2.528-.674-4.458-1.47-5.833-2.393-.779.849-1.475 1.853-2.093 3.03-.62 1.168-.918 2.452-.918 3.885 0 1.882.827 3.417 2.483 4.622 1.642 1.206 3.973 1.863 6.942 1.99l21.103.778c4.933.2 9.315.898 13.178 2.094 3.858 1.203 7.094 2.899 9.722 5.058a21.793 21.793 0 016.026 7.84c1.396 3.046 2.096 6.514 2.096 10.41 0 4.286-.95 8.315-2.823 12.1-1.88 3.796-4.702 7.094-8.465 9.886-3.754 2.785-8.466 4.986-14.142 6.617-5.68 1.616-12.293 2.432-19.883 2.432-7.393 0-13.694-.587-18.906-1.752-5.22-1.166-9.5-2.786-12.837-4.871-3.338-2.07-5.77-4.548-7.29-7.438-1.527-2.882-2.282-6.045-2.282-9.483 0-2.143.269-4.188.815-6.127.547-1.95 1.368-3.812 2.433-5.6 1.074-1.781 2.389-3.485 3.94-5.109 1.555-1.623 3.329-3.175 5.339-4.67-2.786-1.485-4.94-3.515-6.453-6.088-1.533-2.556-2.29-5.368-2.29-8.403 0-3.827.876-7.313 2.63-10.463 1.744-3.144 4.011-5.975 6.803-8.516-2.272-2.271-4.085-5-5.447-8.177-1.356-3.166-2.035-7.13-2.035-11.862 0-5.06.89-9.58 2.67-13.575 1.775-3.986 4.263-7.36 7.43-10.12 3.18-2.75 6.974-4.863 11.387-6.326 4.4-1.455 9.263-2.183 14.58-2.183 2.722 0 5.33.16 7.829.48 2.491.329 4.809.785 6.942 1.367h27.52c1.107 0 1.995.716 2.68 2.139.68 1.435 1.018 3.834 1.018 7.201 0 3.118-.358 5.418-1.068 6.912-.716 1.483-1.59 2.232-2.63 2.232zm64.476.487c-2.594-2.588-6.257-3.883-10.99-3.883-2.403 0-4.513.397-6.324 1.214-1.81.808-3.32 1.902-4.535 3.297a13.854 13.854 0 00-2.666 4.872 19.31 19.31 0 00-.878 5.786c0 4.413 1.3 7.9 3.891 10.461 2.602 2.557 6.2 3.842 10.8 3.842 2.471 0 4.607-.386 6.418-1.177 1.81-.765 3.327-1.843 4.518-3.203 1.2-1.356 2.11-2.93 2.73-4.722.621-1.785.92-3.637.92-5.589 0-4.672-1.298-8.298-3.884-10.898zm-28.888 83.295c0 3.23 1.637 5.698 4.915 7.387 3.26 1.682 7.89 2.529 13.858 2.529 3.697 0 6.806-.377 9.336-1.124 2.527-.747 4.565-1.736 6.125-2.97 1.557-1.233 2.66-2.597 3.305-4.134a12.1 12.1 0 00.964-4.808c0-2.928-1.15-5.16-3.495-6.713-2.334-1.566-5.548-2.402-9.631-2.53l-17.41-.489c-1.684 1.234-3.029 2.408-4.027 3.557-.998 1.125-1.819 2.216-2.434 3.247-.619 1.035-1.014 2.054-1.216 3.027-.202.966-.29 1.975-.29 3.02zM340.06 60.52h-10.204c1.417 1.562 2.441 3.326 3.06 5.307.621 1.974.926 4.036.926 6.18 0 5.057-.845 9.55-2.528 13.476-1.69 3.922-4.108 7.232-7.256 9.91-3.134 2.696-6.926 4.75-11.372 6.134-4.445 1.408-9.374 2.092-14.818 2.092-2.795 0-5.45-.34-7.974-1.016-2.534-.674-4.484-1.47-5.846-2.393a14.14 14.14 0 00-2.086 3.03c-.619 1.168-.925 2.452-.925 3.885 0 1.882.82 3.417 2.481 4.622 1.65 1.206 3.963 1.863 6.958 1.99l21.093.778c4.933.2 9.324.898 13.184 2.094 3.845 1.203 7.1 2.899 9.72 5.058 2.615 2.175 4.628 4.79 6.022 7.84 1.392 3.046 2.092 6.514 2.092 10.41 0 4.286-.934 8.315-2.818 12.1-1.884 3.796-4.694 7.094-8.455 9.886-3.768 2.785-8.481 4.986-14.142 6.617-5.677 1.616-12.306 2.432-19.883 2.432-7.395 0-13.718-.587-18.925-1.752-5.228-1.166-9.497-2.786-12.836-4.871-3.336-2.07-5.77-4.548-7.294-7.438-1.522-2.882-2.278-6.045-2.278-9.483 0-2.143.279-4.188.829-6.127.545-1.95 1.362-3.812 2.414-5.6a29.376 29.376 0 013.946-5.109c1.564-1.623 3.34-3.175 5.342-4.67-2.785-1.485-4.94-3.515-6.457-6.088-1.534-2.556-2.29-5.368-2.29-8.403 0-3.827.879-7.313 2.63-10.463 1.75-3.144 4.01-5.975 6.804-8.516-2.272-2.271-4.085-5-5.44-8.177-1.364-3.166-2.042-7.13-2.042-11.862 0-5.06.888-9.58 2.67-13.575 1.784-3.986 4.264-7.36 7.437-10.12 3.166-2.75 6.974-4.863 11.381-6.326 4.397-1.455 9.269-2.183 14.584-2.183 2.73 0 5.338.16 7.825.48 2.5.329 4.819.785 6.962 1.367h27.509c1.103 0 1.989.716 2.673 2.139.694 1.435 1.03 3.834 1.03 7.201 0 3.118-.36 5.418-1.08 6.912-.715 1.483-1.593 2.232-2.623 2.232zm170.857-2.789c-.714 1.493-1.595 2.23-2.617 2.23h-7.72l-25.635 75.475-10.5 30.747c-.582 1.621-2.168 2.788-4.76 3.508-1.734.476-4.067.775-6.869.931-.274.12-.565.204-.864.204h-18.44c-1.03 0-1.909-.747-2.629-2.233-.707-1.494-1.06-3.806-1.06-6.916 0-3.365.337-5.775 1.013-7.197.678-1.427 1.58-2.143 2.675-2.143h9.236l6.726-16.901c-.846-.387-1.603-.989-2.28-1.793-.684-.819-1.192-1.679-1.512-2.59l-26.593-71.092H409.4c-1.032 0-1.909-.737-2.628-2.23-.708-1.505-1.06-3.793-1.06-6.903 0-3.375.336-5.777 1.02-7.21.678-1.426 1.564-2.144 2.668-2.144h16.438c.417 0 .74-.02 1.172-.02 2.79 0 4.995.05 6.614.141 1.618.099 2.883.34 3.784.727.918.388 1.594.997 2.054 1.802.45.816.902 1.973 1.35 3.458l20.425 58.09h.299l18.669-59.257c.377-1.682.885-2.807 1.506-3.355.603-.548 1.64-.957 3.049-1.214 1.436-.261 3.932-.392 7.491-.392.566 0 1.015.03 1.537.03.02 0 .041-.01.057-.01H508.3c1.103 0 1.99.718 2.667 2.144.694 1.433 1.033 3.835 1.033 7.21 0 3.11-.364 5.398-1.083 6.903zM396.135 133.78c-.716 1.505-1.594 2.242-2.624 2.242h-37.772c-1.036 0-1.916-.737-2.634-2.242-.716-1.494-1.08-3.784-1.08-6.902 0-3.367.34-5.768 1.032-7.213.679-1.414 1.573-2.13 2.682-2.13h6.75V18.5h-6.75c-1.036 0-1.916-.748-2.634-2.252-.716-1.483-1.08-3.785-1.08-6.903 0-3.367.34-5.777 1.032-7.2C353.736.717 354.63 0 355.74 0h16.438c.04 0 .072.052.113.052.765-.03 1.578-.052 2.438-.052 2.402 0 4.373.1 5.935.289 1.556.21 2.804.478 3.739.836.949.35 1.61.799 1.99 1.315a2.77 2.77 0 01.602 1.746v113.35h6.517c1.103 0 1.997.715 2.673 2.13.674 1.444 1.03 3.845 1.03 7.212 0 3.118-.364 5.408-1.08 6.902zm-352.032 0c-.716 1.505-1.592 2.242-2.618 2.242H3.693c-1.034 0-1.91-.737-2.63-2.242C.369 132.286 0 129.996 0 126.878c0-3.367.348-5.768 1.026-7.213.676-1.414 1.572-2.13 2.667-2.13h6.757V18.5H3.693c-1.034 0-1.91-.748-2.63-2.252C.369 14.764 0 12.462 0 9.344c0-3.367.348-5.777 1.026-7.2C1.702.717 2.598 0 3.693 0H20.15c.04 0 .069.052.11.052C21.027.022 21.824 0 22.7 0c2.39 0 4.371.1 5.935.289 1.555.21 2.79.478 3.748.836.934.35 1.593.799 1.98 1.315.388.518.588 1.095.588 1.746v113.35h6.534c1.098 0 1.993.715 2.67 2.13.678 1.444 1.016 3.845 1.016 7.212 0 3.118-.36 5.408-1.068 6.902z"
      }
    />
  );
};
