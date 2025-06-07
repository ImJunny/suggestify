import { Controls } from "@/components/controls";
import { Nav } from "@/components/nav";
import Post from "@/components/post";
import SideNav from "@/components/side-nav";
import TopicNav from "@/components/topic-nav";
import { Card } from "@/components/ui/card";

const posts = [
  {
    username: "johnsmith",
    title: "Chill songs to listen to while driving",
    timestamp: "1hr ago",
    tags: ["Help", "Pop", "Rnb"],
    content: "playlist",
  },
  {
    username: "janedoe",
    title: "Rnb vs contemporary rnb",
    timestamp: "1hr ago",
    tags: ["Discussion", "Rnb"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesua.",
  },
  {
    username: "janedoe",
    title: "Rnb vs contemporary rnb",
    timestamp: "1hr ago",
    tags: ["Discussion", "Rnb"],
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesua.",
  },
  {
    username: "janedoe",
    title: "Rnb vs contemporary rnb",
    timestamp: "1hr ago",
    tags: ["Discussion", "Rnb"],
    content: "playlist",
  },
  {
    username: "janedoe",
    title: "Rnb vs contemporary rnb",
    timestamp: "1hr ago",
    tags: ["Discussion", "Rnb"],
    content: "playlist",
  },
  {
    username: "janedoe",
    title: "Rnb vs contemporary rnb",
    timestamp: "1hr ago",
    tags: ["Discussion", "Rnb"],
    content: "playlist",
  },
  {
    username: "janedoe",
    title: "Rnb vs contemporary rnb",
    timestamp: "1hr ago",
    tags: ["Discussion", "Rnb"],
    content: "playlist",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mt-14">
      <Nav />
      <div className="flex h-full w-full bg-background">
        <SideNav />
        <div className="fixed inset-0 -z-10 bg-white" />
        <div className="fixed inset-0 z-0 bg-gradient-to-t from-background via-background to-violet-950/80" />

        <div className="flex w-full justify-center absolute z-1 gap-4">
          <div className="max-w-3xl w-full my-2 flex flex-col gap-2">
            <TopicNav />
            {posts.map((post, index) => (
              <Post key={index} data={post} />
            ))}
          </div>
          <Card className="my-2 w-xs">
            <span className="text-xs">Recently viewed</span>
          </Card>
        </div>

        <Controls />
      </div>
    </main>
  );
}
