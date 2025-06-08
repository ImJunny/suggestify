import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <Button asChild>
        <Link href="/api/auth">Login to Spotify</Link>
      </Button>
    </div>
  );
}
