import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (name === "" || email === "" || message === "") {
      return NextResponse.json(
        { error: "Nie wprowadzono wszystkich danych" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["grzesiekcode@gmail.com"],
      subject: `Nowa wiadomość od ${name}`,
      replyTo: email,
      text: message,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
