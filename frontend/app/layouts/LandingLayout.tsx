// File: app/layouts/LandingLayout.tsx
import React from "react";
import LandingNavbar from "~/components/navbar/LandingNavbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Landing Navigation */}
      <LandingNavbar />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}
