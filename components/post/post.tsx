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
      <Card className="hover:bg-card/65">
        <div className="flex items-center text-xs mb-2">
          <div className="w-6 h-6 bg-muted-foreground rounded-4xl" />
          <div className="ml-2">
            <span>@{data.username}</span>
            <span className="text-muted-foreground"> • {data.timestamp}</span>
          </div>
        </div>

        <h1 className="font-semibold text-lg">{data.title}</h1>
        {data.tags.length > 0 && (
          <div className="flex gap-2 mt-2">
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
          <p className="text-xs mt-2 text-muted-foreground">{data.content}</p>
        )}

        <div className="flex items-center gap-4 text-xs mt-4">
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
      className={cn("max-w-lg bg-violet-950 flex flex-row gap-4", className)}
      {...props}
    >
      <div className="w-26 h-26 bg-violet-900 rounded-sm" />
      <div>
        <h1 className="text-xl font-semibold">100%</h1>
        <span className="text-xs text-foreground/80">203 songs</span>
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
      <div className="ml-auto self-end rounded-full bg-white h-10 w-10 flex items-center justify-center">
        <Play fill="black" stroke="none" />
      </div>
    </Card>
  );
}
