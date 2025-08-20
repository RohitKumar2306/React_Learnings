import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import Header from "./components/Header/Header";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <App />
);
