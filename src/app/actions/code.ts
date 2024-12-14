"use server";

export async function getAllCodes() {
  return process.env.CODES?.split(",") || [];
}
