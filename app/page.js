import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2" className="text-blue-600 hover:underline">Week 2 Assignment</Link> <br/>
      <Link href="/week-3" className="text-blue-600 hover:underline">Week 3 Assignment</Link><br/>
      <Link href="/week-4" className="text-blue-600 hover:underline">Week 4 Assignment</Link><br/>
      <Link href="/week-5" className="text-blue-600 hover:underline">Week 5 Assignment</Link><br/>
      <Link href="/week-6" className="text-blue-600 hover:underline">Week 6 Assignment</Link><br/>
      <Link href="/week-7" className="text-blue-600 hover:underline">Week 7 Assignment</Link><br/>
      <Link href="/week-8" className="text-blue-600 hover:underline">Week 8 Assignment</Link><br/>
      <Link href="/week-9" className="text-blue-600 hover:underline">Week 9 Assignment</Link><br/>
      <Link href="/week-10" className="text-blue-600 hover:underline">Week 10 Assignment</Link><br/>
    </main>
  );
}

