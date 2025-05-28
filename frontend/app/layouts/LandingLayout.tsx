// File: app/layouts/LandingLayout.tsx
import React from "react";
import LandingNavbar from "~/components/navbar/LandingNavbar";
import { LandingFooter } from "~/components/footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      {/* Landing Navigation */}
      <LandingNavbar />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Landing Footer */}
      <LandingFooter />
    </div>
  );
}
