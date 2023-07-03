import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultsInfo from "./components/ResultsInfo";
// import Data from "./components/Data";
import SearchPage from "./components/SearchPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/info" element={<ResultsInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
