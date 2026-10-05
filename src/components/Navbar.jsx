import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import navLogo from "../assets/logo.png";
import navCoins from "../assets/coins.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Fixture", path: "/fixture" },
  { name: "Teams", path: "/teams" },
  { name: "Schedules", path: "/schedules" },
];

export default function Navbar() {
  return (
    <nav className="navbar mx-auto max-w-7xl px-4  ">
      {/* ================= Logo ================= */}
      <div className="navbar-start">
        <NavLink to="/">
          <img
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            src={navLogo}
            alt="Dream 11"
          />
        </NavLink>
      </div>

      {/* ================= Desktop Menu ================= */}
      <div className="navbar-center hidden md:flex">
        <div className="flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-base lg:text-lg transition-colors duration-200 ${
                  isActive
                    ? "font-bold text-green-500"
                    : "text-gray-300 hover:text-green-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* ================= Right Section ================= */}
      <div className="navbar-end gap-2">
        {/* Coin Balance */}
        <div className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-2 sm:px-4">
          <span className="text-sm font-semibold sm:text-base">60000000</span>

          <img className="h-5 w-5" src={navCoins} alt="Coins" />
        </div>

        {/* ================= Mobile Menu ================= */}
        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle"
            aria-label="Open navigation menu"
          >
            <IoMenu className="text-3xl" />
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-gray-700 bg-base-200 p-2 shadow-xl"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-green-500"
                      : "text-gray-300 hover:text-green-400"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
