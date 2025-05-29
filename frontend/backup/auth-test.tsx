// Test route for AuthLayout - TEMPORARY
import AuthLayout from "~/layouts/AuthLayout";

export default function AuthLayoutTest() {
  return (
    <AuthLayout>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-6">
          Auth Layout Test ✅
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-xl font-semibold mb-4">Layout Components:</h2>
          <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
            <li>✅ Logo (top-left) - links to home</li>
            <li>✅ Clean header with border</li>
            <li>✅ Centered content area</li>
            <li>✅ Footer (bottom) - same as landing</li>
            <li>✅ No navigation menu</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            This test route will be removed in Phase 4
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
