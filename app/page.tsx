import { Chat } from '@/components/Chat';

export default function Home() {
  return (
    <main className="h-screen flex-col items-center px-0 bg-gray-50">
      <div className="w-full min-h-screen flex flex-col items-center">

        <Chat />
      </div>
    </main>
  );
}
