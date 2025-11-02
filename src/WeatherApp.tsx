import type { ReactNode } from "react";

import "./WeatherApp.css";
export const WeatherApp = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container-box">
        <div className="content">{children}</div>
      </div>
    </>
  );
};
