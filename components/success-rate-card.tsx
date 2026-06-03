import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/progress-bar";

export function SuccessRateCard() {
  return (
    <Card className="w-full max-w-[24rem] gap-7 rounded-xl border-0 bg-card px-0 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.08)] ring-0">
      <CardHeader className="px-6">
        <CardTitle className="text-[1.65rem] font-semibold leading-[1.2]">
          Job Success
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 px-6">
        <div className="flex flex-col gap-3">
          <p className="text-lg leading-[1.4]">Remote Hiring</p>
          <ProgressBar value={50} />
          <div className="flex items-center justify-between text-sm leading-[1.4]">
            <span>On track</span>
            <span>$500 / $2500</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg leading-[1.4]">In House Hiring</p>
          <ProgressBar value={90} />
        </div>
      </CardContent>
    </Card>
  );
}
