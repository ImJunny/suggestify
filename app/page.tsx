import { Controls } from "@/components/controls/controls";
import { Nav } from "@/components/nav/nav";
import SideNav from "@/components/nav/side-nav";
import TopicNav from "@/components/nav/topic-nav";
import Posts from "@/components/post/posts";
import RecentlyViewed from "@/components/home/recently-viewed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mt-14">
      <Nav />
      <div className="flex h-full w-full bg-background">
        <div className="fixed inset-0 -z-10 bg-white" />
        <div
          className={`fixed inset-0 z-0 bg-gradient-to-t from-background via-background to-violet-950/80`}
        />

        <SideNav />
        <div className="absolute z-1 flex w-full justify-center gap-2 pr-2 pb-16">
          <div className="max-w-3xl w-full my-2 ml-16 md:ml-58 flex flex-col gap-2">
            <Posts />
          </div>
          <div className="sticky top-16 hidden sm:flex flex-col self-start max-w-xs w-full gap-2 ">
            <TopicNav />
            <RecentlyViewed />
          </div>
        </div>
        <Controls />
      </div>
    </main>
  );
}
