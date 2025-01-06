import React from "react";
import FileMenu from "./navbar/FileMenu";
import MainMenu from "./navbar/MainMenu";
import UserMenu from "./navbar/UserMenu";

export default function Navbar() {
  return (
    <nav className="bg-[var(--nav-bg)] text-[var(--text)] p-4 flex justify-between items-center transition-colors duration-200">
      <FileMenu />
      <MainMenu />
      <UserMenu />
    </nav>
  );
}