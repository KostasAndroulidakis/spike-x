// app/components/navbar/MainMenu.tsx
import { House, Brain, Activity, Eye, ChartScatter, Library } from "lucide-react";
import { Link, useLocation } from "@remix-run/react";

export default function MainMenu() {
  const location = useLocation();

  const menuItems = [
    { Icon: House, text: "Main", path: "/home" },
    { Icon: Brain, text: "Architecture", path: "/architecture" },
    { Icon: Activity, text: "Training", path: "/training" },
    { Icon: Eye, text: "Visualization", path: "/visualization" },
    { Icon: ChartScatter, text: "Evaluation", path: "/evaluation" },
    { Icon: Library, text: "Library", path: "/library" },
  ];

  return (
    <div className="flex space-x-4">
      {menuItems.map(({ Icon, text, path }) => {
        const isSelected = location.pathname === path;
        return (
          <Link
            key={text}
            to={path}
            className={`px-4 py-2 rounded flex items-center transition-colors duration-200 ${
              isSelected
                ? "bg-blue-600 text-white"
                : "hover:bg-[var(--nav-hover)] text-[var(--text)] hover:text-[var(--text)]"
            }`}
          >
            <Icon
              className={`w-5 h-5 inline-block mr-2 ${
                isSelected ? "text-white" : "text-[var(--text)]"
              }`}
            />
            {text}
          </Link>
        );
      })}
    </div>
  );
}