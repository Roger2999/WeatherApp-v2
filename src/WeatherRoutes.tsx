import { Navigate, Route } from "react-router-dom";
import { WeatherApp } from "./WeatherApp";
import { Home } from "./pages";
import { PageNotFound } from "./components";

export const WeatherRoutes = () => {
  return (
    <>
      <WeatherApp>
        <PageNotFound>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
        </PageNotFound>
      </WeatherApp>
    </>
  );
};
