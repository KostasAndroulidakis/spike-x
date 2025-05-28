// Console index route - redirects to dashboard
import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/console/dashboard");
};