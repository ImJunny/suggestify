import { Controls } from "@/components/controls/controls";
import { Nav } from "@/components/nav/nav";
import SideNav from "@/components/nav/side-nav";
import TopicNav from "@/components/nav/topic-nav";
import Posts from "@/components/post/posts";
import RecentlyViewed from "@/components/home/recently-viewed";

export default function Home() {
  return (
    <main className="mt-14 flex min-h-screen flex-col">
      <Nav />
      <div className="bg-background flex h-full w-full">
        <div className="fixed inset-0 -z-10 bg-white" />
        <div
          className={`from-background via-background fixed inset-0 z-0 bg-gradient-to-t to-zinc-600/80`}
        />

        <SideNav />
        <div className="absolute z-1 flex w-full justify-center gap-2 pr-2 pb-16">
          <div className="my-2 ml-16 flex w-full max-w-3xl flex-col gap-2 md:ml-58 lg:ml-72">
            <Posts />
          </div>
          <div className="sticky top-16 hidden w-full max-w-xs flex-col gap-2 self-start lg:flex">
            <TopicNav />
            <RecentlyViewed />
          </div>
        </div>
        <Controls />
      </div>
    </main>
  );
}
