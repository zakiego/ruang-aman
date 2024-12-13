"use client";

import { EmpathyBot } from "@/components/EmpathyBot";
import { Landing } from "@/components/Landing";
import { useState } from "react";

export default function Client() {
  const [name, setName] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
      {name ? <EmpathyBot /> : <Landing name={name} setName={setName} />}
    </main>
  );
}
