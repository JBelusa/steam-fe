import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-4 bg-neutral-900 px-36 py-4 w-screen h-full min-h-screen text-white">
        <main className="flex-grow px-8 py-8">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
