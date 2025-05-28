// Console layout route - provides layout for all console pages
import { Outlet } from "@remix-run/react";
import ConsoleLayout from "~/layouts/ConsoleLayout";

export default function ConsoleApp() {
  return (
    <ConsoleLayout>
      <Outlet />
    </ConsoleLayout>
  );
}