import React from "react";
import { Card } from "../ui/card";
import { PostData, posts } from "../post/posts";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function RecentlyViewed() {
  return (
    <Card className="p-0">
      <div className="flex justify-between items-center mb-2 px-4 pt-4 text-xs">
        <span>Recents</span>
        <span className="hover:cursor-pointer hover:underline text-muted-foreground">
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
        <div className="flex items-center text-xs mx-4 pt-4">
          <div className="w-6 h-6 bg-muted-foreground rounded-4xl" />
          <div className="ml-2">
            <span>@{post.username}</span>
            <span className="text-muted-foreground"> • {post.timestamp}</span>
          </div>
        </div>
        <p className="truncate max-w-xs text-sm mx-4 mt-2 mb-2">{post.title}</p>
        <div className="text-xs text-muted-foreground mx-4 pb-4 flex flex-row gap-2">
          <span>8 likes</span>
          <span>2 comments</span>
          <span>3 suggestions</span>
        </div>
      </div>
      {index < 4 && <Separator />}
    </Link>
  );
}
