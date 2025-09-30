import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "./Error404";

export const PageNotFound = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Routes>
        {children}
        <Route path="*" element={<Navigate to={"/404"} />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </>
  );
};
