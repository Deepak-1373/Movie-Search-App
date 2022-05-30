import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";
import { NotFound } from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="my-0 mx-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
