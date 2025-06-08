import Post from "./post";

export type PostData = {
  username: string;
  title: string;
  timestamp: string;
  tags: string[];
  content?: string; // 'playlist' or text content
};
export const posts: PostData[] = [
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

export default function Posts() {
  return (
    <>
      {posts.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </>
  );
}
