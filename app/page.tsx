import Link from "next/link";

const getPosts = async () => {
  console.log(process.env.BASE_URL);

  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);

  if (!res.ok) {
    console.log(res);
  }

  return res.json();
};

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();

  return (
    <main className="py-8 px-48">
      <Link
        className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md"
        href={"/dashboard"}
      >
        Go to the Dashboard
      </Link>

      {data ? (
        data.map((post) => (
          <div className="pt-7" key={post.id}>
            <h1 className="font-bold text-lg">{post.title}</h1>
          </div>
        ))
      ) : (
        <div>Loading....</div>
      )}
    </main>
  );
}
