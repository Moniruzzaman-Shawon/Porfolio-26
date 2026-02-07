import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Log for now — can be extended with email service later
    console.log("Contact form submission:", validated);

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }
}
