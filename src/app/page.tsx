import { ActivityList } from "@/components/ActivityList";
import { Header } from "@/components/Header";
import { WorkList } from "@/components/WorkList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[40rem] px-4 pt-0 pb-8">
        <ActivityList />
        <WorkList />
      </main>
    </>
  );
}
