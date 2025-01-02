import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Spike-X Frontend" },
    { name: "description", content: "A platform for Spiking Neural Networks" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold">Welcome to Spike-X Frontend!</h1>
        <p className="mt-4 text-lg">Start creating or managing your SNN models from the menu above.</p>
      </div>
    </div>
  );
}
