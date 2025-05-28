// Console dashboard page
export default function ConsoleDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Recent Models</h3>
          <p className="text-gray-600 dark:text-gray-300">View and manage your neural network models</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Training Jobs</h3>
          <p className="text-gray-600 dark:text-gray-300">Monitor active and completed training sessions</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Library</h3>
          <p className="text-gray-600 dark:text-gray-300">Browse neural components and research papers</p>
        </div>
      </div>
    </div>
  );
}