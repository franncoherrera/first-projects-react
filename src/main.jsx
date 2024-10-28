import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GiftExpertApp } from "./gitExpertApp/GifExpertApp.jsx";
import { HomeApp } from "./homeApp.jsx";
import "./styles.css";
import { TodoApp } from "./todoApp/TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/gift" element={<GiftExpertApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
