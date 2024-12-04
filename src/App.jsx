import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Bestseller from "./layouts/Bestseller";
import FlashDeal from "./layouts/FlashDeal";
import MostPopular from "./layouts/MostPopular";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bestseller" element={<Bestseller/>} />
          <Route path="/flash-deal" element={<FlashDeal/>} />
          <Route path="/most-popular" element={<MostPopular/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
