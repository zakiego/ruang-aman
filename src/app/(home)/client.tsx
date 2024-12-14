"use client";

import { getName } from "@/app/actions/cookies";
import { Chat } from "@/components/Chat";
import { Landing } from "@/components/Landing";

export default function Client({ name }: { name: string | undefined }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#EFEBE9]">
      {name ? <Chat /> : <Landing />}
    </main>
  );
}
