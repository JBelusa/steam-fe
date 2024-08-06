import * as React from "react";

import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

import StorePage from "./pages/StorePage/StorePage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";

// BONUS: Loading state for search button
// BONUS: Images to be scaled to same dimensions + show placeholders
function PlaceHolder() {
  return (
    <div>
      <h2>Placeholder</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="placeholder" element={<PlaceHolder />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
