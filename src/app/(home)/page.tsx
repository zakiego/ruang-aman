import Client from "@/app/(home)/client";
import { getName } from "@/app/actions/cookies";

export default async function Home() {
  const name = await getName();

  return <Client name={name} />;
}
