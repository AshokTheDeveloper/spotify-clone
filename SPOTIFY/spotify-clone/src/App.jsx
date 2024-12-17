import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Album from "./components/Album/Album";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/album/:id" element={<Album />} />
      </Routes>
    </>
  );
}

export default App;
