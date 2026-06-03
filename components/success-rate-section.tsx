import Image from "next/image";
import { SuccessRateCard } from "@/components/success-rate-card";

export function SuccessRateSection() {
  return (
    <section className="mx-auto grid w-full max-w-[105rem] grid-cols-1 items-center gap-12 bg-background px-6 py-24 sm:px-10 lg:grid-cols-[0.88fr_1fr] lg:px-28">
      <div>
        <h2 className="max-w-[38rem] text-[2.25rem] font-semibold leading-[1.15] sm:text-[2.5rem]">
          Verixa Increases Your Job Success Rate
        </h2>
        <p className="mt-5 max-w-[36rem] text-lg leading-[1.4] text-muted-foreground">
          You will learn some job success factors and the job success strategies
          you need to succeed.
        </p>

        <div className="mt-56 grid max-w-[38rem] grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold leading-[1.25]">
              Job Finding
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-base leading-[1.4] text-muted-foreground">
              <p>To increase impression</p>
              <p>Get skilled jobs</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-[1.25]">
              Matched Skills
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-base leading-[1.4] text-muted-foreground">
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
