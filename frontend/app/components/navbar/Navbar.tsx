import React from "react";
import FileMenu from "./FileMenu";
import MainMenu from "./MainMenu";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--text)] p-4 flex justify-between items-center transition-colors duration-200">
      <FileMenu />
      <MainMenu />
      <UserMenu />
    </nav>
  );
}