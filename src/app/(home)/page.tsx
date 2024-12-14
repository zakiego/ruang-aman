import Client from "@/app/(home)/client";
import { getAllCodes } from "@/app/actions/code";
import { getName } from "@/app/actions/cookies";

export default async function Home() {
  const name = await getName();
  const codes = await getAllCodes();

  return <Client name={name} codes={codes} />;
}
