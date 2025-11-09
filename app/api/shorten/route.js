// api to create short urls
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import dbConnect from "@/lib/mongodb";
import LinkDataBase from "@/models/Link";

export async function POST(req) {
  try {
    // connect to db
    await dbConnect();
    console.log("Connected to DB");

    // parse request body
    const { url, customText } = await req.json();

    console.log("Received URL: ", url);

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // validate url
    try {
      new URL(url);
    } catch (err) {
      console.error("Invalid URL", err);
      return NextResponse.json({ error: "Invalid URL"}, { status: 400 });
    }

    // check if customText already exists
    if (customText) {
      const existingCustom = await LinkDataBase.findOne({ customText });
      if (existingCustom) {
        return NextResponse.json(
          { error: "Custom text already exists" },
          { status: 400 }
        )
      }
    }

    // generate shortCode
    const shortCode = customText || nanoid(6);

    // create new link
    const link = await LinkDataBase.create({
      originalURL: url,
      shortCode,
      customText: customText || null,
    })

    console.log("link created", link);

    return NextResponse.json(
      { shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${shortCode}`},
      { shortCode },
    )
  } catch (error) {
    console.error("Server Error", error);
    return NextResponse.json(
      { error: "Something went wrong! :(" },
      { status: 500 },
    )
  }
}