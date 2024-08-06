import React from "react";
import {Outlet} from "react-router-dom";

import Navbar from "../Navbar";

function Layout({}) {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-gray-800 to-indigo-900 w-screen max-w-full h-full min-h-screen text-neutral-300">
      <div className="py-4">
        <Navbar />
      </div>
      <div className="px-36 py-4">
        <main className="px-8 py-8"><Outlet/></main>
      </div>
    </div>
  );
}

export default Layout;
