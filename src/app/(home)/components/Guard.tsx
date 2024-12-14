"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

function Hm() {
  return (
    <a href="https://zakiego.com" className="group flex items-center gap-1">
      <span className="underline ">Hmmm</span>{" "}
      <span className="group-hover:hidden block">🤔</span>
      <span className="group-hover:block hidden">😊👋🏻</span>
    </a>
  );
}

export default function Guard({
  children,
  codes,
}: {
  children: React.ReactNode;
  codes: string[];
}) {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  if (!code) {
    return (
      <Card className="w-full h-screen flex items-center justify-center">
        <CardContent>
          <p>
            Maaf,
            <br />
            kamu belum punya akses ke halaman ini :(
          </p>
          <Hm />
        </CardContent>
      </Card>
    );
  }

  const isValid = codes.includes(code);

  if (!isValid) {
    return (
      <Card className="w-full h-screen flex items-center justify-center">
        <CardContent>
          <p>
            Maaf,
            <br />
            kode tidak valid :(
          </p>
          <Hm />
        </CardContent>
      </Card>
    );
  }

  return <>{children}</>;
}
