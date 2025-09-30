import type { ReactNode } from "react";
import { Footer, Header } from "./components";
import "./WeatherApp.css";
export const WeatherApp = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};
