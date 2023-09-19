import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col w-fit">
      <p>This is the protected route</p>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
