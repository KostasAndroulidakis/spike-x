import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Navbar from "./components/Navbar";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <Navbar /> {/* Εδώ τοποθετούμε το Navbar */}
        {children}  {/* Περιεχόμενο της σελίδας */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}