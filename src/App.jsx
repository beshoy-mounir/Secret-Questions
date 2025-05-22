import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Description from "./pages/Description.jsx";
import Game from "./pages/Game.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/description" element={<Description />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </div>
  );
}

export default App;
