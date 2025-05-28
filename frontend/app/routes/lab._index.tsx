// Lab index route - redirects to architecture
import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/lab/architecture");
};