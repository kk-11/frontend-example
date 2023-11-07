import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root");
if (!root) throw new Error("Root not found");

createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
