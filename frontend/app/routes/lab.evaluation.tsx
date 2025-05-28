// Lab evaluation page
export default function LabEvaluation() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-6">Evaluation</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Model evaluation and metrics will be displayed here.
        </p>
      </div>
    </div>
  );
}