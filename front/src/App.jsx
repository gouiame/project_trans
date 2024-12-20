import { useState } from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Routing from "./router/index";

import "./App.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  return (
    <>
      <Toaster />
      <Routing />
    </>
  );
}

export default App;
