import prisma from "@/prisma/client";
import { NextApiRequest } from "next";

type dataProps = {
  title: string;
};

export async function POST(request: Request) {
  const datajson = await request.json();

  const post: dataProps = datajson;

  try {
    if (!post.title.length) {
      return new Response("Empty Post not accepted", { status: 500 });
    }

    const data = await prisma.post.create({
      data: { title: post.title, content: "Test cotent" },
    });
    console.log("🚀 ~ file: route.ts:21 ~ POST ~ data:", data.id);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
