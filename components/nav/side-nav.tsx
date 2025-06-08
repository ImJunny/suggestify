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
import { Separator } from "../ui/separator";

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
    <div className="bg-background-variant-other fixed z-2 flex h-full flex-col gap-2 px-2 py-2 md:min-w-56 lg:min-w-70">
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
              "text-muted-foreground flex items-center gap-5 rounded-sm px-2 py-2 text-sm",
              route === option.href
                ? "bg-background-variant text-foreground"
                : "hover:bg-background-variant/70 hover:text-foreground",
            )}
          >
            {option.icon}
            <span className="hidden text-sm md:block">{option.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
