"use client";

import { setName } from "@/app/actions/cookies";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Landing() {
  const [tempName, setTempName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      setName(tempName);
    }
  };

  return (
    <Card className="rounded-xl">
      <CardHeader className="text-center">
        <p className="text-gray-600 text-xl">Lebih nyaman dipanggil apa?</p>
      </CardHeader>
      <CardContent className="">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            placeholder="Masukkan nama panggilanmu"
            className="text-base placeholder:text-center text-center"
            required
          />
          <Button type="submit" className="w-full text-base">
            Mulai Cerita
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
