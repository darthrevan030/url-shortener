import dbConnect from "@/lib/mongodb";
import LinkDataBase from "@/models/Link";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  try {
    await dbConnect();

    const {shortCode} = params;

    const link = await LinkDataBase.findOne(
      { customText: shortCode }
    );

    if (!link) {
      return NextResponse.json(
        { error: "Short URL not Found" },
        { status: 404 }
      );
    }

    link.clicks += 1;

    await link.save();

    return NextResponse.redirect(link.originalURL);

  } catch (err) {
    console.error("Redirect Error: ", err);
    return NextResponse.json(
      { error: "Something Went Wrong :((" },
      { status: 500 }
    );
  }
}