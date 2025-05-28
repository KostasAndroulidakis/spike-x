// File: spike-x/frontend/app/root.tsx - start

import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./components/theme/ThemeProvider";
import "./tailwind.css";

function Document({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);
  
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            min-height: 100%;
          }
        `}</style>
      </head>
      <body className="bg-[var(--background)] text-[var(--text)] transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Document>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Document>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

// File: spike-x/frontend/app/root.tsx - end