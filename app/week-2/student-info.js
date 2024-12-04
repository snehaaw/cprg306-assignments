import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Sneha</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/snehaaw/cprg306-assignments" target="_blank">
        cprg306-assignments 
        </Link>
      </p>
    </div>
  );
}
