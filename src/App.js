import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import theme from "./theme";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
