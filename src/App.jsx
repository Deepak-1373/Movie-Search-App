import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
