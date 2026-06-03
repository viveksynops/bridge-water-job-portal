import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navItems = ["Home", "About", "Case Studies", "Pages", "Service"];

function LogoMark() {
  return (
    <div className="flex items-center gap-2.5" aria-label="Verixa">
      <span className="relative size-10 overflow-hidden" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-foreground [clip-path:polygon(0_0,100%_50%,0_100%)]" />
        <span className="absolute inset-y-0 right-0 w-1/2 bg-foreground [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
      </span>
      <span className="text-[1.72rem] font-bold tracking-normal">Verixa</span>
    </div>
  );
}

function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className="h-[1.38rem] overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full bg-foreground ${className}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function JobSuccessCard() {
  return (
    <section className="rounded-[1.15rem] bg-[linear-gradient(135deg,oklch(0.68_0.22_31)_0%,oklch(0.86_0.13_78)_56%,oklch(0.47_0.11_108)_100%)] p-6 sm:p-10 lg:p-12">
      <Card className="mx-auto max-w-[24.5rem] gap-6 rounded-[1.15rem] border-0 bg-card px-0 py-7 ring-0">
        <CardHeader className="px-6 sm:px-7">
          <CardTitle className="text-[1.7rem] font-bold tracking-normal text-foreground">
            Job Success
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-7 px-6 sm:px-7">
          <div className="flex flex-col gap-3">
            <p className="text-[1.1rem] text-foreground">Remote Hiring</p>
            <ProgressBar value={50} />
            <div className="flex items-center justify-between text-sm text-foreground">
              <span>On track</span>
              <span>$500 / $2500</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[1.1rem] text-foreground">In House Hiring</p>
            <ProgressBar value={90} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function CareerPanel() {
  return (
    <section className="grid min-h-[23.5rem] grid-cols-1 items-center gap-8 rounded-[1.15rem] bg-foreground p-7 text-background sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:p-12">
      <div className="max-w-[28rem]">
        <h2 className="text-[2.6rem] font-bold leading-[1.02] tracking-normal sm:text-[3.1rem]">
          Boost Your Career Success
        </h2>
        <p className="mt-5 max-w-[24rem] text-base leading-6 text-background/95">
          Our mission is to empower businesses every day with top talent
        </p>
      </div>

      <Card className="justify-self-end rounded-[1.05rem] border-0 bg-background px-0 py-0 text-foreground ring-0 lg:max-w-[25rem]">
        <CardHeader className="grid-cols-[1fr_auto] px-6 pt-7 sm:px-7">
          <CardTitle className="text-[1.45rem] font-bold tracking-normal">
            Review
          </CardTitle>
          <a
            href="#"
            className="text-base text-foreground underline underline-offset-2"
          >
            Recommended
          </a>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-10 sm:px-7">
          <p className="max-w-[20rem] text-base leading-6">
            Our mission is to empower businesses every day with top talent
          </p>
          <Button className="mt-10 h-16 w-full rounded-[0.32rem] text-base font-semibold">
            See recommendation
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-[105rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <LogoMark />

        <nav
          className="hidden rounded-lg bg-muted p-1 text-base font-medium lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`flex h-14 items-center gap-1.5 rounded-md px-5 transition-colors hover:bg-background ${
                item === "Home" ? "bg-background" : ""
              }`}
            >
              {item}
              {item === "Pages" ? <ChevronDown data-icon="inline-end" /> : null}
            </a>
          ))}
        </nav>

        <Button className="hidden h-[4.25rem] rounded-lg px-7 text-base font-semibold sm:inline-flex">
          Get Started
          <ArrowRight data-icon="inline-end" />
        </Button>
      </header>

      <section className="mx-auto flex w-full max-w-[68rem] flex-col items-center px-5 pb-20 pt-14 text-center sm:px-8 lg:pb-16 lg:pt-14">
        <Badge
          variant="secondary"
          className="h-12 rounded-full px-5 text-base font-medium text-muted-foreground"
        >
          Global Job Finder Plus Portal
        </Badge>
        <h1 className="mt-9 max-w-[62rem] text-[3.2rem] font-bold leading-[0.98] tracking-normal sm:text-[5.1rem] lg:text-[5.55rem]">
          Connecting top talent with leading opportunities
        </h1>
        <p className="mt-7 max-w-[43rem] text-xl leading-8 text-muted-foreground">
          Find jobs that match your skills and career goals. Our platform helps
          professionals connect with leading.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button className="h-[4.5rem] rounded-md px-8 text-lg font-semibold">
            View Services
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            className="h-[4.5rem] rounded-md border-foreground/35 px-8 text-lg font-semibold"
          >
            Find A Job
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[103rem] grid-cols-1 gap-5 px-5 pb-8 sm:px-8 lg:grid-cols-[1.38fr_1fr_1fr] lg:px-12">
        <div className="relative min-h-[32rem] overflow-hidden rounded-[1.15rem] lg:row-span-2 lg:min-h-[46rem]">
          <Image
            src="/images/candidate-workspace.png"
            alt="Professional candidate smiling at a laptop"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <JobSuccessCard />

        <div className="relative min-h-[23rem] overflow-hidden rounded-[1.15rem] lg:min-h-0">
          <Image
            src="/images/hiring-team.png"
            alt="Hiring support team working with a tablet"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="lg:col-span-2">
          <CareerPanel />
        </div>
      </section>
    </main>
  );
}
