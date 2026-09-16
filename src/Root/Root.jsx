import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div data-theme="light" className="flex flex-col min-h-screen">
      <NavBar />
      <main className="grow bg-white">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
