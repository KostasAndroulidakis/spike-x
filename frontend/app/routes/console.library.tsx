// Console library page
export default function ConsoleLibrary() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-6">Library</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Neural Components</h3>
          <p className="text-gray-600 dark:text-gray-300">Browse and contribute neural network components</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Research Papers</h3>
          <p className="text-gray-600 dark:text-gray-300">Access curated research publications</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-2">Datasets</h3>
          <p className="text-gray-600 dark:text-gray-300">Manage and share training datasets</p>
        </div>
      </div>
    </div>
  );
}