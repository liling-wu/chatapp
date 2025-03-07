import { Chat } from '@/components/Chat';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Chat Interface</h1>
      <Chat />
    </main>
  );
}
