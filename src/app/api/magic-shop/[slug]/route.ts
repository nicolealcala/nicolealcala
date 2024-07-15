import connectToDB from "@/config/db";
import { Note } from "@/lib/models";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  const { slug } = params;
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  try {
    await connectToDB();
    if (code && code !== "") {
      const note = await Note.findOne({
        noteFor: { $regex: new RegExp(slug, "i") },
        code,
      });
      return NextResponse.json(note, { status: 200 });
    }

    const notes = await Note.find({
      noteFor: { $regex: new RegExp(slug, "i") },
    });
    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
