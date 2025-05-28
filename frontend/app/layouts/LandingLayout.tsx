// File: app/layouts/LandingLayout.tsx
import React from "react";
import LandingNavbar from "~/components/navbar/LandingNavbar";
import { LandingFooter } from "~/components/footer";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  const theme = useMarketingTheme();
  
  return (
    <div className={`min-h-screen ${theme.page.bg} ${theme.page.text} flex flex-col`}>
      {/* Landing Navigation */}
      <LandingNavbar />
      
      {/* Main Content with top padding to account for fixed navbar */}
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      {/* Landing Footer */}
      <LandingFooter />
    </div>
  );
}
