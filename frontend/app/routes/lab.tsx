// Lab layout route - provides layout for all lab pages
import { Outlet, useSearchParams } from "@remix-run/react";
import LabLayout from "~/layouts/LabLayout";

export default function LabApp() {
  const [searchParams] = useSearchParams();
  const modelName = searchParams.get("model") || "Untitled Model";

  return (
    <LabLayout modelName={modelName}>
      <Outlet />
    </LabLayout>
  );
}