import Link from 'next/link'

export default function Home() {
  return (
    <main className='py-8 px-48'>
     <Link className='bg-teal-700 text-black font-medium py-2 px-4 rounded-md' href={"/dashboard"}>Go to the Dashboard</Link>
    </main>
  );
}
