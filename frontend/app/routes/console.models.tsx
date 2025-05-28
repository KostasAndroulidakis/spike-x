// Console models page
import { Link } from "@remix-run/react";
import { Plus } from "lucide-react";

export default function ConsoleModels() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[var(--text)]">Models</h1>
        <Link
          to="/lab"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
        >
          <Plus size={20} />
          New Model
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 text-center">
            No models yet. Create your first neural network model to get started.
          </p>
        </div>
      </div>
    </div>
  );
}