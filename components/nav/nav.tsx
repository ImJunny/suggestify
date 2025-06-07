import { Search } from "lucide-react";
import ProfileDropdown from "./profile-dropdown";

export function Nav() {
  return (
    <nav className="bg-bar w-full h-14 flex items-center justify-center fixed top-0 z-50">
      <h1 className="absolute left-2 text-xl font-semibold hidden md:block">
        Suggestify
      </h1>
      <div className="h-9 md:max-w-lg mx-2 flex-grow-1 bg-background-variant rounded-full text-xs text-muted-foreground flex items-center gap-2 px-3">
        <Search size={20} /> Search
      </div>
      <ProfileDropdown />
    </nav>
  );
}
