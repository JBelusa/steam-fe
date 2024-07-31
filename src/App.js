import * as React from "react";

import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

import StorePage from "./pages/StorePage/StorePage";
import Layout from "./components/Layout/Layout";

// BONUS: Loading state for search button
// BONUS: Images to be scaled to same dimensions + show placeholders

function HomePage() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <div>
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/store"
          element={
            <Layout>
              <StorePage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
