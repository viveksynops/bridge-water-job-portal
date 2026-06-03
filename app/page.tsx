import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileCheck2,
  MousePointer2,
  Upload,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const navItems = ["Home", "About", "Case Studies", "Pages", "Service"];

const popularJobs = [
  {
    title: "Mid Level UI/UX Designer",
    salary: "$5000",
    tags: ["1 - 3 Years", "Developer", "Hybrid Flexible"],
  },
  {
    title: "Frontend Developer (React)",
    salary: "$3500",
    tags: ["3 - 4 Years", "Creative", "Remote Only"],
  },
  {
    title: "Digital Marketing Specialist",
    salary: "$6500",
    tags: ["1 - 3 Years", "Verified", "HR"],
  },
  {
    title: "Junior HR Executive",
    salary: "$4000",
    tags: ["6 - 9 Years", "High Salary", "Marketing"],
  },
];

const testimonials = [
  {
    name: "Sarah Thompson",
    quote:
      "Verixa offers great tools for tracking applicants and organising interviews. It has made our recruitment process smoother and more organised.",
    image: "/images/testimonial-sarah.png",
  },
  {
    name: "Steve kal",
    quote:
      "Verixa's job alerts kept me updated with relevant positions daily. I finally landed a role that perfectly matches my skills and aspirations.",
    image: "/images/testimonial-steve.png",
  },
  {
    name: "Lee Atkins",
    quote:
      "Verixa offers great tools for tracking applicants and organizing interviews. It has made our recruitment process smoother and more organized.",
    image: "/images/testimonial-lee.png",
  },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-2.5" aria-label="Verixa">
      <span className="relative size-10 overflow-hidden" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-foreground [clip-path:polygon(0_0,100%_50%,0_100%)]" />
        <span className="absolute inset-y-0 right-0 w-1/2 bg-foreground [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
      </span>
      <span className="text-[1.75rem] font-semibold leading-[1.4] tracking-[-0.02em]">
        Verixa
      </span>
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
          <CardTitle className="text-[1.75rem] font-medium leading-[1.4] tracking-[-0.02em] text-foreground">
            Job Success
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-7 px-6 sm:px-7">
          <div className="flex flex-col gap-3">
            <p className="text-[1.125rem] leading-[1.4] tracking-[-0.01em] text-foreground">
              Remote Hiring
            </p>
            <ProgressBar value={50} />
            <div className="flex items-center justify-between text-sm leading-[1.4] tracking-[-0.01em] text-foreground">
              <span>On track</span>
              <span>$500 / $2500</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[1.125rem] leading-[1.4] tracking-[-0.01em] text-foreground">
              In House Hiring
            </p>
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
        <h2 className="text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em]">
          Boost Your Career Success
        </h2>
        <p className="mt-5 max-w-[24rem] text-lg leading-[1.4] tracking-[-0.01em] text-background/95">
          Our mission is to empower businesses every day with top talent
        </p>
      </div>

      <Card className="justify-self-end rounded-[1.05rem] border-0 bg-background px-0 py-0 text-foreground ring-0 lg:max-w-[25rem]">
        <CardHeader className="grid-cols-[1fr_auto] px-6 pt-7 sm:px-7">
          <CardTitle className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
            Review
          </CardTitle>
          <a
            href="#"
            className="text-base leading-[1.4] tracking-[-0.01em] text-foreground underline underline-offset-2"
          >
            Recommended
          </a>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-10 sm:px-7">
          <p className="max-w-[20rem] text-lg leading-[1.4] tracking-[-0.01em]">
            Our mission is to empower businesses every day with top talent
          </p>
          <Button className="mt-10 h-16 w-full rounded-[0.32rem] text-lg font-medium leading-[1.4] tracking-[-0.01em]">
            See recommendation
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}

const profileItems = [
  {
    title: "Curriculam Vitae",
    tone: "text-orange-500 bg-orange-100",
  },
  {
    title: "Personal Data",
    tone: "text-blue-500 bg-blue-100",
  },
  {
    title: "Academic Information",
    tone: "text-fuchsia-500 bg-fuchsia-100",
  },
];

function ProfileMockup() {
  return (
    <div className="relative mx-auto flex min-h-[23rem] w-full max-w-[31rem] items-center justify-center">
      <div className="absolute top-20 h-64 w-[21rem] rounded-xl bg-card/70 shadow-[0_18px_60px_rgba(0,0,0,0.04)]" />
      <div className="absolute top-24 h-64 w-[24rem] rounded-xl bg-card/80 shadow-[0_18px_60px_rgba(0,0,0,0.05)]" />
      <div className="relative mt-16 w-full max-w-[27rem] rounded-xl bg-card p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
            Complete Profile
          </h3>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl font-medium leading-[1.4] tracking-[-0.02em] text-muted-foreground">
              1/3
            </span>
            <span className="h-1.5 w-28 rounded-full bg-foreground" />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2.5">
          {profileItems.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[4.75rem] items-center gap-4 rounded-lg border bg-card px-3"
            >
              <div
                className={`flex size-14 items-center justify-center rounded-md ${item.tone}`}
              >
                <FileCheck2 />
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium leading-[1.4] tracking-[-0.01em]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-[1.4] tracking-[-0.01em] text-muted-foreground">
                  pdf.36
                </p>
              </div>
              <div className="flex size-6 items-center justify-center rounded-full bg-foreground text-background">
                <Check />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UploadMockup() {
  return (
    <div className="relative mx-auto flex min-h-[23rem] w-full max-w-[31rem] items-center justify-center">
      <div className="absolute top-20 h-64 w-[21rem] rounded-xl bg-card/70 shadow-[0_18px_60px_rgba(0,0,0,0.04)]" />
      <div className="absolute top-24 h-64 w-[24rem] rounded-xl bg-card/80 shadow-[0_18px_60px_rgba(0,0,0,0.05)]" />
      <div className="relative mt-16 w-full max-w-[29rem] rounded-xl bg-card p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
            Upload Your Document
          </h3>
          <div className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <X />
          </div>
        </div>

        <div className="relative mt-6 flex h-44 flex-col items-center justify-center rounded-xl border border-foreground/30">
          <MousePointer2 className="absolute right-20 top-11 text-foreground" />
          <Upload />
          <p className="mt-4 text-sm leading-[1.4] tracking-[-0.01em] text-muted-foreground">
            Drag & Drop your file or{" "}
            <span className="font-semibold text-foreground">browse</span>
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm leading-[1.4] tracking-[-0.01em] text-muted-foreground">
            Supported formats: PNG, JPG, PDF, MP4
          </p>
          <Button className="h-9 rounded-md px-5 text-sm font-medium leading-[1.4] tracking-[-0.01em]">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-[105rem] pb-36 pt-28">
      <div className="mx-auto max-w-[52rem] text-center">
        <h2 className="text-[3.125rem] font-semibold leading-[1.25] tracking-[-0.02em]">
          A Smooth Process With Outstanding Results
        </h2>
        <p className="mx-auto mt-7 max-w-[40rem] text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
          Highlighting the smooth and efficient process from job search to
          landing a role.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Card className="min-h-[36rem] rounded-[1.15rem] border bg-muted/35 px-12 pb-12 pt-10 ring-0">
          <ProfileMockup />
          <div className="mt-12">
            <h3 className="text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em]">
              Professional Profile Creation
            </h3>
            <p className="mt-5 text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
              Create a professional profile that highlights your skills &
              experience.
            </p>
          </div>
        </Card>

        <Card className="min-h-[36rem] rounded-[1.15rem] border bg-muted/35 px-12 pb-12 pt-10 ring-0">
          <UploadMockup />
          <div className="mt-12">
            <h3 className="text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em]">
              Smart Application System
            </h3>
            <p className="mt-5 text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
              Apply to multiple jobs quickly using our streamlined application
              system.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

function PopularJobsSection() {
  return (
    <section className="mx-auto w-full max-w-[105rem] bg-muted/35 pb-20 pt-32">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_0.72fr]">
        <h2 className="max-w-[44rem] text-[3.125rem] font-semibold leading-[1.25] tracking-[-0.02em]">
          The Most Popular Jobs Are Listed Below
        </h2>
        <p className="max-w-[34rem] justify-self-start pt-10 text-2xl leading-[1.4] tracking-[-0.01em] text-foreground lg:justify-self-end">
          Explore some of the most in-demand positions currently available on
          our platform.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1fr]">
        <div className="rounded-[1.15rem] bg-[linear-gradient(135deg,oklch(0.68_0.22_31)_0%,oklch(0.86_0.13_78)_56%,oklch(0.47_0.11_108)_100%)] p-16">
          <div className="relative aspect-[0.91] overflow-hidden rounded-[0.95rem] border border-background/80">
            <Image
              src="/images/popular-jobs-interview.png"
              alt="Candidate interviewing for a popular job"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {popularJobs.map((job) => (
            <Card
              key={job.title}
              className="rounded-xl border-0 bg-card px-7 py-6 ring-0"
            >
              <div className="grid grid-cols-[1fr_auto] gap-8">
                <h3 className="text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em]">
                  {job.title}
                </h3>
                <p className="text-[2rem] font-medium leading-[1.4] tracking-[-0.02em]">
                  {job.salary}
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-wrap gap-3">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border bg-background px-2 py-1 text-base leading-[1.4] tracking-[-0.01em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-4 border-b border-foreground pb-1 text-xl leading-[1.4] tracking-[-0.01em]"
                >
                  Read More
                  <ArrowRight />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessRateCard() {
  return (
    <Card className="w-full max-w-[24rem] gap-7 rounded-xl border-0 bg-card px-0 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.08)] ring-0">
      <CardHeader className="px-6">
        <CardTitle className="text-[1.75rem] font-medium leading-[1.4] tracking-[-0.02em]">
          Job Success
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 px-6">
        <div className="flex flex-col gap-3">
          <p className="text-xl leading-[1.4] tracking-[-0.01em]">
            Remote Hiring
          </p>
          <ProgressBar value={50} />
          <div className="flex items-center justify-between text-base leading-[1.4] tracking-[-0.01em]">
            <span>On track</span>
            <span>$500 / $2500</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl leading-[1.4] tracking-[-0.01em]">
            In House Hiring
          </p>
          <ProgressBar value={90} />
        </div>
      </CardContent>
    </Card>
  );
}

function SuccessRateSection() {
  return (
    <section className="mx-auto grid w-full max-w-[105rem] grid-cols-1 items-center gap-16 bg-background py-32 lg:grid-cols-[0.88fr_1fr]">
      <div>
        <h2 className="max-w-[43rem] text-[3.125rem] font-semibold leading-[1.25] tracking-[-0.02em]">
          Verixa Increases Your Job Success Rate
        </h2>
        <p className="mt-7 max-w-[38rem] text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
          You will learn some job success factors and the job success strategies
          you need to succeed.
        </p>

        <div className="mt-80 grid max-w-[38rem] grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
              Job Finding
            </h3>
            <div className="mt-5 flex flex-col gap-2 text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
              <p>To increase impression</p>
              <p>Get skilled jobs</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
              Matched Skills
            </h3>
            <div className="mt-5 flex flex-col gap-2 text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
              <p>Experienced job hunter</p>
              <p>Intern opportunities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[43rem]">
        <div className="absolute right-0 top-0 h-full w-[84%] overflow-hidden rounded-[1.15rem]">
          <Image
            src="/images/job-success-meeting.png"
            alt="Professional candidate in a meeting"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute left-0 top-[34%] w-[55%]">
          <SuccessRateCard />
        </div>
      </div>
    </section>
  );
}

function CompaniesSection() {
  return (
    <section className="bg-foreground py-32 text-background">
      <div className="mx-auto grid w-full max-w-[105rem] grid-cols-1 items-center gap-20 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="relative min-h-[43rem]">
          <div className="absolute left-0 top-0 h-full w-[84%] overflow-hidden rounded-[1.15rem]">
            <Image
              src="/images/best-companies-interview.png"
              alt="Business interviewer handing a document to a candidate"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>

          <Card className="absolute right-0 top-[36%] w-full max-w-[24rem] rounded-xl border-0 bg-background px-0 py-0 text-foreground ring-0">
            <CardHeader className="grid-cols-[1fr_auto] px-6 pt-7">
              <CardTitle className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
                Review
              </CardTitle>
              <a
                href="#"
                className="text-xl leading-[1.4] tracking-[-0.01em] text-foreground underline underline-offset-2"
              >
                Recommended
              </a>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-12">
              <p className="max-w-[20rem] text-xl leading-[1.4] tracking-[-0.01em]">
                Our mission is to empower businesses every day with top talent
              </p>
              <Button className="mt-16 h-16 w-full rounded-md text-xl font-normal leading-[1.4] tracking-[-0.01em]">
                See recommendation
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="max-w-[44rem] text-[3.125rem] font-semibold leading-[1.25] tracking-[-0.02em]">
            Get a Job at One of the Best Companies!
          </h2>
          <p className="mt-7 max-w-[44rem] text-2xl leading-[1.4] tracking-[-0.01em] text-background/90">
            Find great places to work. Get access to millions of company
            reviews. Company name or job title. Find Companies. Do you want to
            search for salaries?
          </p>

          <div className="mt-72 grid max-w-[40rem] grid-cols-1 gap-12 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
                Job Finding
              </h3>
              <div className="mt-5 flex flex-col gap-2 text-2xl leading-[1.4] tracking-[-0.01em] text-background/90">
                <p>To increase impression</p>
                <p>Get skilled jobs</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
                Matched Skills
              </h3>
              <div className="mt-5 flex flex-col gap-2 text-2xl leading-[1.4] tracking-[-0.01em] text-background/90">
                <p>Experienced job hunter</p>
                <p>Intern opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[105rem] bg-background py-32">
      <div className="max-w-[44rem]">
        <h2 className="text-[3.125rem] font-semibold leading-[1.25] tracking-[-0.02em]">
          Insight From Our Users
        </h2>
        <p className="mt-7 max-w-[36rem] text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
          Highlighting authentic testimonials from users who found success with
          Verixa.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="relative min-h-[31rem] overflow-hidden rounded-[1.15rem]"
          >
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} testimonial portrait`}
              fill
              sizes="(min-width: 1024px) 31vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.32)_55%,rgba(0,0,0,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-background">
              <h3 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em]">
                {testimonial.name}
              </h3>
              <p className="mt-6 text-2xl leading-[1.4] tracking-[-0.01em]">
                “{testimonial.quote}”
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-[calc(50%-50vw)] bg-[linear-gradient(135deg,oklch(0.68_0.22_31)_0%,oklch(0.86_0.13_78)_57%,oklch(0.47_0.11_108)_100%)] py-20">
      <div className="mx-auto w-full max-w-[105rem]">
        <div className="grid min-h-[47rem] grid-cols-1 gap-16 overflow-hidden rounded-[1.4rem] bg-background px-20 py-24 lg:grid-cols-[0.82fr_1fr]">
          <div className="relative flex flex-col">
            <div className="pointer-events-none absolute -bottom-44 -left-64 size-[54rem] rounded-full border-[4.5rem] border-muted/45" />
            <div className="relative z-10 max-w-[38rem]">
              <h2 className="text-[3.125rem] font-semibold leading-[1.25] tracking-[-0.02em]">
                Ready to Get Started
              </h2>
              <p className="mt-7 text-2xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
                Verixa is your trusted platform for discovering job
                opportunities that match your skills, experience, and career
                aspirations.
              </p>
            </div>

            <Button className="relative z-10 mt-auto h-[4.5rem] w-fit rounded-md px-8 text-xl font-normal leading-[1.4] tracking-[-0.01em]">
              Send Message
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>

          <form className="grid content-start gap-7" aria-label="Contact form">
            <div className="grid gap-3">
              <Label
                htmlFor="contact-name"
                className="text-xl font-normal leading-[1.4] tracking-[-0.01em]"
              >
                Name
              </Label>
              <Input
                id="contact-name"
                placeholder="Enter your name"
                className="h-[3.75rem] rounded-md border-0 bg-muted px-5 text-xl leading-[1.4] tracking-[-0.01em] placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid gap-3">
              <Label
                htmlFor="contact-phone"
                className="text-xl font-normal leading-[1.4] tracking-[-0.01em]"
              >
                Phone
              </Label>
              <Input
                id="contact-phone"
                placeholder="Enter your phone Number"
                className="h-[3.75rem] rounded-md border-0 bg-muted px-5 text-xl leading-[1.4] tracking-[-0.01em] placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid gap-3">
              <Label
                htmlFor="contact-subject"
                className="text-xl font-normal leading-[1.4] tracking-[-0.01em]"
              >
                Subject
              </Label>
              <Input
                id="contact-subject"
                placeholder="Write your subject"
                className="h-[3.75rem] rounded-md border-0 bg-muted px-5 text-xl leading-[1.4] tracking-[-0.01em] placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid gap-3">
              <Label
                htmlFor="contact-message"
                className="text-xl font-normal leading-[1.4] tracking-[-0.01em]"
              >
                Your massage
              </Label>
              <Textarea
                id="contact-message"
                placeholder="What comes to your mind?"
                className="min-h-[9.5rem] resize-y rounded-md border-0 bg-muted px-5 py-4 text-xl leading-[1.4] tracking-[-0.01em] placeholder:text-muted-foreground"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Jobs", "Contact", "Blog"],
  },
  {
    title: "Support",
    links: ["License", "Style Guide", "Chagelog", "404"],
  },
  {
    title: "Social",
    links: ["Facebook", "LinkedIn", "Instagram", "Twitter"],
  },
];

function FooterSection() {
  return (
    <footer className="relative mx-auto w-full max-w-[105rem] overflow-hidden bg-background pb-20 pt-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.34fr]">
        <div>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
            <p className="max-w-[31rem] text-2xl leading-[1.4] tracking-[-0.01em]">
              Discover Job Opportunities That Match Your Skills, Experience,
              And Career Goals With Verixa.
            </p>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-2xl font-medium leading-[1.4] tracking-[-0.02em]">
                  {column.title}
                </h2>
                <nav className="mt-4 flex flex-col gap-3" aria-label={column.title}>
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-xl leading-[1.4] tracking-[-0.01em] text-muted-foreground"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t pt-6">
            <div className="flex flex-col gap-4 text-xl leading-[1.4] tracking-[-0.01em] sm:flex-row sm:items-center sm:justify-between">
              <p>
                Designed by{" "}
                <a href="#" className="underline underline-offset-2">
                  Flowdevz
                </a>
              </p>
              <p>
                Powered by{" "}
                <a href="#" className="underline underline-offset-2">
                  Webflow
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[29rem] overflow-hidden rounded-[1.15rem]">
          <Image
            src="/images/footer-workspace.png"
            alt="Professional working on a laptop"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[5.6rem] left-0 select-none text-[13rem] font-semibold leading-none tracking-[-0.04em] text-muted/45">
        VERIXA
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-[105rem] items-center justify-between py-5">
        <LogoMark />

        <nav
          className="hidden rounded-lg bg-muted p-1 text-xl font-normal leading-[1.4] tracking-[-0.01em] lg:flex"
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

        <Button className="hidden h-[4.25rem] rounded-lg px-7 text-xl font-normal leading-[1.4] tracking-[-0.01em] sm:inline-flex">
          Get Started
          <ArrowRight data-icon="inline-end" />
        </Button>
      </header>

      <section className="mx-auto flex w-full max-w-[68rem] flex-col items-center pb-20 pt-14 text-center lg:pb-16 lg:pt-14">
        <Badge
          variant="secondary"
          className="h-12 rounded-full px-5 text-base font-normal leading-[1.4] tracking-[-0.01em] text-muted-foreground"
        >
          Global Job Finder Plus Portal
        </Badge>
        <h1 className="mt-9 max-w-[64rem] text-[3.2rem] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[4.25rem]">
          Connecting top talent with leading opportunities
        </h1>
        <p className="mt-7 max-w-[43rem] text-xl leading-[1.4] tracking-[-0.01em] text-muted-foreground">
          Find jobs that match your skills and career goals. Our platform helps
          professionals connect with leading.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button className="h-[4.5rem] rounded-md px-8 text-xl font-normal leading-[1.4] tracking-[-0.01em]">
            View Services
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            className="h-[4.5rem] rounded-md border-foreground/35 px-8 text-xl font-normal leading-[1.4] tracking-[-0.01em]"
          >
            Find A Job
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[105rem] grid-cols-1 gap-5 pb-8 lg:grid-cols-[1.38fr_1fr_1fr]">
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

      <ProcessSection />

      <PopularJobsSection />

      <SuccessRateSection />

      <CompaniesSection />

      <TestimonialsSection />

      <ContactSection />

      <FooterSection />
    </main>
  );
}
