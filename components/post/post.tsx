import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Bookmark,
  Disc,
  Heart,
  MessageCircle,
  Play,
  Share,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PostProps = {
  data: {
    username: string;
    title: string;
    timestamp: string;
    tags: string[];
    content?: string;
  };
};

export default function Post({ data }: PostProps) {
  return (
    <Link href="/">
      <Card className="hover:bg-card/70">
        <div className="mb-2 flex items-center text-xs">
          <div className="bg-muted-foreground h-6 w-6 rounded-4xl" />
          <div className="ml-2">
            <span>@{data.username}</span>
            <span className="text-muted-foreground"> • {data.timestamp}</span>
          </div>
        </div>

        <h1 className="text-lg font-semibold">{data.title}</h1>
        {data.tags.length > 0 && (
          <div className="mt-2 flex gap-2">
            <Badge>{data.tags[0]}</Badge>
            {data.tags.slice(1).map((tag, index) => (
              <Badge key={index} className="bg-muted text-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {data.content === "playlist" ? (
          <SmallPlaylist className="mt-4" />
        ) : (
          <p className="text-muted-foreground mt-2 text-xs">{data.content}</p>
        )}

        <div className="mt-4 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Heart size={18} /> 1
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={18} /> 1
          </div>
          <div className="flex items-center gap-2">
            <Disc size={18} /> 1
          </div>
          <Bookmark size={18} />
          <Share size={18} />
        </div>
      </Card>
    </Link>
  );
}

function SmallPlaylist({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card
      className={cn("flex max-w-lg flex-row gap-4 bg-violet-950", className)}
      {...props}
    >
      <div className="h-26 w-26 rounded-sm bg-violet-900" />
      <div>
        <h1 className="text-xl font-semibold">100%</h1>
        <span className="text-foreground/80 text-xs">203 songs</span>
        <div className="text-xs">
          <div>
            <span>The Prologue</span>
            <span className="text-foreground/80"> • Halsey</span>
          </div>
          <div>
            <span>The 100 Letters</span>
            <span className="text-foreground/80"> • Halsey</span>
          </div>
          <div>
            <span>Eyes Closed</span>
            <span className="text-foreground/80"> • Halsey</span>
          </div>
        </div>
      </div>
      <div className="ml-auto flex h-10 w-10 items-center justify-center self-end rounded-full bg-white">
        <Play fill="black" stroke="none" />
      </div>
    </Card>
  );
}
