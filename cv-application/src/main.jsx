import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EducationContextProvider } from "./Components/ContextProvider/EducationalInfoContextProvider.jsx";
import { GeneralInfoContextProvider } from "./Components/ContextProvider/GeneralInfoContextProvider.jsx";
import { ProfessionalExpContextProvider } from "./Components/ContextProvider/ProfessionalExpContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfessionalExpContextProvider>
      <GeneralInfoContextProvider>
        <EducationContextProvider>
          <App />
        </EducationContextProvider>
      </GeneralInfoContextProvider>
    </ProfessionalExpContextProvider>
  </React.StrictMode>
);
