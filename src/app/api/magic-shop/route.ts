import connectToDB from "@/config/db";
import { Note } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  try {
    await connectToDB();
    const note = await Note.findOne({ code });
    return NextResponse.json(note, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error, status: 500 });
  }
};
