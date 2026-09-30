import React from "react";
import ReactDOM from "react-dom/client";
// import router from "./router";
import { RouterProvider } from "react-router-dom";
import App from "./page/App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // 나중에 라우터 적용하면 교체
    // <RouterProvider router={router} /> 
    <React.StrictMode>
        <App />
    </React.StrictMode>
);