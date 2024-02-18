import { trpc } from '@/infra/server/utils';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'client' });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <p>{hello.data.greeting}</p>
    </main>
  );
}
