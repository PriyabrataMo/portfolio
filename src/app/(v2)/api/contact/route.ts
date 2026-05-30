import { sendEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const { error } = await sendEmail(formData);
  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
