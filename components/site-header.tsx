import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo-mark";

const navItems = ["Home", "Jobs", "Companies", "Employers", "Contact"];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-[105rem] items-center justify-between px-6 py-5 sm:px-10 lg:px-28">
      <LogoMark />

      <nav
        className="hidden rounded-lg bg-muted p-1 text-base font-normal leading-[1.4] lg:flex"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`flex h-12 items-center gap-1.5 rounded-md px-4 transition-colors hover:bg-background ${
              item === "Home" ? "bg-background" : ""
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      <Button className="hidden h-12 rounded-lg px-5 text-sm font-normal leading-[1.4] sm:inline-flex">
        Get Started
        <ArrowRight data-icon="inline-end" />
      </Button>
    </header>
  );
}
