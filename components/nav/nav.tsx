import { Search } from "lucide-react";
import ProfileDropdown from "./profile-dropdown";

export function Nav() {
  return (
    <nav className="bg-bar fixed top-0 z-50 flex h-14 w-full items-center justify-center">
      <h1 className="absolute left-4 hidden text-xl font-semibold md:block">
        Suggestify
      </h1>
      <div className="bg-background-variant text-muted-foreground mx-2 flex h-9 flex-grow-1 items-center gap-2 rounded-full px-3 text-xs md:max-w-lg">
        <Search size={20} /> Search
      </div>
      <ProfileDropdown />
    </nav>
  );
}
