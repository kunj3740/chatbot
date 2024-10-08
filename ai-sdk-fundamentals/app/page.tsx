import Link from "next/link"; // Correct import

export default function Page() {
  return (
    <main className="space-y-4">
      <h1 className="text-xl font-semibold">Vercel AI SDK Fundamentals</h1>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/examples/basic-chatbot">Chatbot with `useChat`</Link>
        </li>
      </ul>
    </main>
  );
}
