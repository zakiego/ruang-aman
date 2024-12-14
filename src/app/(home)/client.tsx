"use client";

import { Chat } from "@/app/(home)/components/Chat";
import Guard from "@/app/(home)/components/Guard";
import { Landing } from "@/app/(home)/components/Landing";

export default function Client({
  name,
  codes,
}: {
  name: string | undefined;
  codes: string[];
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#EFEBE9]">
      <Guard codes={codes}>{name ? <Chat /> : <Landing />}</Guard>
    </main>
  );
}
