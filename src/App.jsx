import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Description from "./pages/Description.jsx";
import Game from "./pages/Game.jsx";

function App() {
  const [th, eTh] = useState();
  // Theme
  useEffect(() => {
    if (
      localStorage.th === "dark" ||
      (!("th" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [th]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing eTh={eTh} />}></Route>
        <Route path="/description" element={<Description eTh={eTh} />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </div>
  );
}

export default App;
