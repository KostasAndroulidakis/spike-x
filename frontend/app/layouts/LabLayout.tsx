// File: app/layouts/LabLayout.tsx
import React from "react";
import { Outlet } from "@remix-run/react";
import LabNavbar from "~/components/navbar/LabNavbar";

interface LabLayoutProps {
  modelName?: string;
}

export default function LabLayout({ modelName }: LabLayoutProps) {
  return (
    <div className="h-screen bg-[var(--background)] flex flex-col">
      {/* Lab Navigation */}
      <LabNavbar modelName={modelName} />
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
