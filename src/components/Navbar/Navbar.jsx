import { NavLink, useLocation } from "react-router-dom";

const items = [
  {
    name: "Home",
    path: "/",
    subItems: [
      { name: "Placeholder", path: "/placeholder" },
      { name: "Placeholder", path: "/placeholder" },
    ],
  },
  {
    name: "Store",
    path: "/store",
    subItems: [
      { name: "Placeholder", path: "/placeholder" },
      { name: "Placeholder", path: "/placeholder" },
    ],
  },
  {
    name: "Community",
    path: "/placeholder",
    subItems: [
      { name: "Placeholder", path: "/placeholder" },
      { name: "Placeholder", path: "/placeholder" },
    ],
  },
  {
    name: "About",
    path: "/placeholder",
    subItems: [],
  },
  {
    name: "Support",
    path: "/placeholder",
    subItems: [],
  },
];
function Navbar() {
  const location = useLocation();
  console.log(location);

  const navClass = ({ isActive }) =>
    isActive ? "text-blue-400 underline" : "";

  return (
    <div className="flex justify-around items-center py-4">
      <img
        src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
        alt="logo"
        className="h-10"
      />
      <nav>
        <ul className="flex items-center gap-x-8">
          {items.map((item) => (
            <li
              className="relative px-2 py-1 rounded-md font-bold group"
              key={item.name}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${navClass({ isActive })} hover:text-cyan-300`
                }
              >
                {item.name}
              </NavLink>
              <ul className="group-hover:text-blue-400 left-0 absolute opacity-0 group-hover:opacity-100 mt-2 font-bold">
                {item.subItems.map((subItem) => (
                  <li
                    className="bg-slate-300 mt-1 px-2 py-1 rounded-md hover:text-cyan-300"
                    key={subItem.name}
                  >
                    <NavLink to={subItem.path} className={navClass}>
                      {subItem.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
