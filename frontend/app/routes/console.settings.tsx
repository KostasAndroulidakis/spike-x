// Console settings page
export default function ConsoleSettings() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-6">Settings</h1>
      <div className="max-w-2xl space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-4">Account Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Theme</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-[var(--text)]">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Notifications</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[var(--text)]">Email notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[var(--text)]">Training completion alerts</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-[var(--text)] mb-4">Compute Resources</h3>
          <p className="text-gray-600 dark:text-gray-300">Configure your preferred compute targets for training.</p>
        </div>
      </div>
    </div>
  );
}