// import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

function App() {
  const [isHeader, setIsHeader] = useState(true);

  return (
    <div className="app">
      <Header isHeader={isHeader} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/coins/:id" element={<CoinPage/>} />
        </Routes>
      </main>
    </div>
    );
}

export default App;
