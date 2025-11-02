import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globalStyles.css";
import { WeatherRoutes } from "./WeatherRoutes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <WeatherRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
