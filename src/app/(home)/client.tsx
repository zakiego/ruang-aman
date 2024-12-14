"use client";

import { Chat } from "@/app/(home)/components/Chat";
import { Landing } from "@/app/(home)/components/Landing";

export default function Client({ name }: { name: string | undefined }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#EFEBE9]">
      {name ? <Chat /> : <Landing />}
    </main>
  );
}
