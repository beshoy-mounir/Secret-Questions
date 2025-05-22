import { useEffect, useState } from "react";
// import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Description from "./pages/Description.jsx";
import Game from "./pages/Game.jsx";
import { Button } from "@material-tailwind/react";
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
        <Route path="/description" element={<Description />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </div>
  );
}

export default App;
