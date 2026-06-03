import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/progress-bar";

export function JobSuccessCard() {
  return (
    <section className="rounded-[1.15rem] bg-[linear-gradient(135deg,oklch(0.68_0.22_31)_0%,oklch(0.86_0.13_78)_56%,oklch(0.47_0.11_108)_100%)] p-6 sm:p-10 lg:p-12">
      <Card className="mx-auto max-w-[24.5rem] gap-5 rounded-[1.15rem] border-0 bg-card px-0 py-6 ring-0">
        <CardHeader className="px-6 sm:px-7">
          <CardTitle className="text-[1.65rem] font-semibold leading-[1.2] text-foreground">
            Job Success
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-7 px-6 sm:px-7">
          <div className="flex flex-col gap-3">
            <p className="text-base leading-[1.4] text-foreground sm:text-lg">
              Remote Hiring
            </p>
            <ProgressBar value={50} />
            <div className="flex items-center justify-between text-sm leading-[1.4] text-foreground">
              <span>On track</span>
              <span>$500 / $2500</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base leading-[1.4] text-foreground sm:text-lg">
              In House Hiring
            </p>
            <ProgressBar value={90} />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
