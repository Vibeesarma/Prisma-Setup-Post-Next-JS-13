import prisma from "@/prisma/client";

export async function GET(request: Request) {
  try {
    // get posts
    const data = await prisma.post.findMany();
    console.log("🚀 ~ file: route.ts:7 ~ GET ~ data:", data)

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
