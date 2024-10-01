import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="text-blue-600 hover:underline">Week 2 Assignment</Link> <br/>
      <Link href="/week-3" className="text-blue-600 hover:underline">Week 3 Assignment</Link>

    </main>
  );
}

