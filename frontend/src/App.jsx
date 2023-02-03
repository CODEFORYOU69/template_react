import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AddFight from "./components/AddFight";
import AddFighter from "./pages/AddFighter";
import FightersPage from "./pages/FightersPage";
import ChartData from "./pages/ChartData";
import { CurrentUserContextProvider } from "./context/userContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/AddFight" element={<AddFight />} />
          <Route path="/AddFighter" element={<AddFighter />} />
          <Route path="/fighters" element={<FightersPage />} />
          <Route path="/dashboard" element={<ChartData />} />
        </Routes>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
