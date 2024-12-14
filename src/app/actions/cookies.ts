"use server";

import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(name, value);
};

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const deleteCookie = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(name);
};

export const getName = async (): Promise<string | undefined> => {
  const cookieStore = await cookies();
  return cookieStore.get("name")?.value;
};

export const setName = async (name: string) => {
  const cookieStore = await cookies();
  cookieStore.set("name", name, { maxAge: 60 * 60 * 24 }); // 1 day in seconds
};
