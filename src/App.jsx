import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./pages/Home";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="my-0 mx-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
