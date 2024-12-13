import { EmpathyBot } from "../components/EmpathyBot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-50">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">
        Your Safe Space to Vent
      </h1>
      <EmpathyBot />
    </main>
  );
}
