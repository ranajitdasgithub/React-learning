import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Grocery from "./components/Grocery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
    </div>
  );
}

export default App;
