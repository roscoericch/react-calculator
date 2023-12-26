import React from "react";
import ReactDOM from "react-dom/client";
import { Calculator } from "react-advanced-calculator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
      <Calculator />
    </div>
  </React.StrictMode>
);
