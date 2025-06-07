"use client";
import { cn } from "@/lib/utils";
import {
  Bookmark,
  Compass,
  Heart,
  House,
  MessageCircleMore,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

type NavOption = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const mainNavOptions: NavOption[] = [
  { name: "Home", href: "/", icon: <House /> },
  { name: "Explore", href: "/explore", icon: <Compass /> },
];
const socialNavOptions: NavOption[] = [
  { name: "Following", href: "/following", icon: <User /> },
  { name: "Groups", href: "/groups", icon: <Users /> },
  { name: "Messages", href: "/messages", icon: <MessageCircleMore /> },
];
const otherNavOptions: NavOption[] = [
  { name: "Liked posts", href: "/liked-posts", icon: <Heart /> },
  { name: "Saved posts", href: "/saved-posts", icon: <Bookmark /> },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="bg-background-variant-other p-4 min-w-68 fixed h-full z-10 flex flex-col gap-4">
      <NavOptions data={mainNavOptions} route={pathname} />
      <Separator />
      <NavOptions data={socialNavOptions} route={pathname} />
      <Separator />
      <NavOptions data={otherNavOptions} route={pathname} />
    </div>
  );
}

function NavOptions({ data, route }: { data: NavOption[]; route: string }) {
  return (
    <ul>
      {data.map((option, index) => (
        <li key={index}>
          <Link
            href={option.href}
            className={cn(
              "flex gap-5 items-center py-2 px-2 rounded-sm text-sm text-muted-foreground",
              route === option.href
                ? "bg-background-variant text-foreground"
                : "hover:bg-background-variant/70 hover:text-foreground"
            )}
          >
            {option.icon}
            {option.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
