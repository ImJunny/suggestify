import React from "react";
import { Card } from "../ui/card";
import { PostData, posts } from "../post/posts";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function RecentlyViewed() {
  return (
    <Card className="p-0">
      <div className="mb-2 flex items-center justify-between px-4 pt-4 text-xs">
        <span>Recents</span>
        <span className="text-muted-foreground hover:cursor-pointer hover:underline">
          Clear
        </span>
      </div>

      {posts.slice(0, 5).map((post, index) => (
        <RecentPost key={index} post={post} index={index} />
      ))}
    </Card>
  );
}

function RecentPost({ post, index }: { post: PostData; index: number }) {
  return (
    <Link href={`/post`}>
      <div className="hover:bg-card/70">
        <div className="mx-4 flex items-center pt-4 text-xs">
          <div className="bg-muted-foreground h-6 w-6 rounded-4xl" />
          <div className="ml-2">
            <span>@{post.username}</span>
            <span className="text-muted-foreground"> • {post.timestamp}</span>
          </div>
        </div>
        <p className="mx-4 mt-2 mb-2 max-w-xs truncate text-sm">{post.title}</p>
        <div className="text-muted-foreground mx-4 flex flex-row gap-2 pb-4 text-xs">
          <span>8 likes</span>
          <span>2 comments</span>
          <span>3 suggestions</span>
        </div>
      </div>
      {index < 4 && <Separator />}
    </Link>
  );
}
