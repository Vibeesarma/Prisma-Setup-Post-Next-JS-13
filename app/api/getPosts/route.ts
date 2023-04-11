import prisma from "@/prisma/client";

type dataProps = {
  title: string;
};

export async function GET(request: Request) {
  try {
    // get posts
    const data = await prisma.post.findMany();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!request.body) {
      return new Response("Error Occur", { status: 500 });
    } else {
      const post: dataProps = JSON.parse(request.body);

      if (!post.title.length) {
        return new Response("Empty Post not accepted", { status: 500 });
      }

      const data = await prisma.post.create({ data: { title: post.title } });
      console.log("🚀 ~ file: route.ts:21 ~ POST ~ data:", data);

      return new Response(JSON.stringify(data), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
