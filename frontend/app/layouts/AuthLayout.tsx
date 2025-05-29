// File: app/layouts/AuthLayout.tsx
import React from "react";
import { Logo } from "~/components/common";
import { LandingFooter } from "~/components/footer";
import { useMarketingTheme } from "~/hooks/useMarketingTheme";

interface AuthLayoutProps {
  children: React.ReactNode;
}

/**
 * Clean authentication layout for login and signup pages
 * Features: Logo (top-left), content area, footer (bottom)
 * No navigation menu - minimal design for auth flows
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  const theme = useMarketingTheme();
  
  return (
    <div className={`min-h-screen ${theme.page.bg} ${theme.page.text} flex flex-col`}>
      {/* Simple header with logo only */}
      <header className={`${theme.navbar.bg} pl-9 pr-7 py-4 border-b ${theme.footer.border}`}>
        <div className="flex items-center">
          <Logo className={theme.navbar.logo} to="/" />
        </div>
      </header>
      
      {/* Main content area - centered for auth forms */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
      
      {/* Footer - same as landing page */}
      <LandingFooter />
    </div>
  );
}
