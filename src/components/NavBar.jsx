import React from 'react';
import { Link, NavLink } from "react-router";

const NavBar = () => {
    const activeStyle =
      "text-[#DC143C] font-bold text-lg border-b-2 border-[#DC143C] pb-1";
    const normalStyle =
      "text-gray-700 hover:text-[#DC143C] font-medium text-lg";

    const links = (
      <>
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Home
          </NavLink>

          <NavLink
            to={"/allMovies"}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            All Movies
          </NavLink>
        </div>
      </>
    );
    return (
      <div className="sticky top-0 z-50">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
              {/* Movie Icon */}
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <p className="font-bold text-xl lg:text-2xl xl:text-3xl">
                Movie <span className="text-red-500 ">Explorer</span>
              </p>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    );
};

export default NavBar;