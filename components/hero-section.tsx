import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-[68rem] flex-col items-center px-6 pb-20 pt-14 text-center sm:px-10 lg:px-28 lg:pb-16 lg:pt-14">
      <Badge
        variant="secondary"
        className="h-11 rounded-full px-5 text-sm font-normal leading-[1.4] text-muted-foreground"
      >
        Global Job Finder Plus Portal
      </Badge>
      <h1 className="mt-8 max-w-[60rem] text-[2.75rem] font-semibold leading-[1.12] sm:text-[3.5rem]">
        Connecting top talent with leading opportunities
      </h1>
      <p className="mt-5 max-w-[40rem] text-base leading-[1.45] text-muted-foreground sm:text-lg">
        Find jobs that match your skills and career goals. Our platform helps
        professionals connect with leading.
      </p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Button className="h-12 rounded-md px-5 text-sm font-normal leading-[1.4]">
          View Services
          <ArrowRight data-icon="inline-end" />
        </Button>
        <Button
          variant="outline"
          className="h-12 rounded-md border-foreground/35 px-5 text-sm font-normal leading-[1.4]"
        >
          Find A Job
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </section>
  );
}
