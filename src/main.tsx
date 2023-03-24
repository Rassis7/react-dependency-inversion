import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { DependenceContext, httpDependencies } from "./infra/dependencies";
import { http } from "./infra/http";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DependenceContext.Provider value={httpDependencies}>
      <App />
    </DependenceContext.Provider>
  </React.StrictMode>
);
