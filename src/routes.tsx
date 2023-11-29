import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ThemeProvider } from "@mui/material";
// import AuthPage from "./pages/AuthPage";
import { GlobalStyles } from "./shared/themes";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function Router() {
  return (
    // <ThemeProvider theme={LightTheme}>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
