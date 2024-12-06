import { db } from "@/lib/db";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { username, password } = body;
};
