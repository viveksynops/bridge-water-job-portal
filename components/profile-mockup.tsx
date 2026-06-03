import { Check, FileCheck2 } from "lucide-react";

const profileItems = [
  { title: "Curriculam Vitae", tone: "text-orange-500 bg-orange-100" },
  { title: "Personal Data", tone: "text-blue-500 bg-blue-100" },
  { title: "Academic Information", tone: "text-fuchsia-500 bg-fuchsia-100" },
];

export function ProfileMockup() {
  return (
    <div className="relative mx-auto flex min-h-[23rem] w-full max-w-[31rem] items-center justify-center">
      <div className="absolute top-20 h-64 w-[21rem] rounded-xl bg-card/70 shadow-[0_18px_60px_rgba(0,0,0,0.04)]" />
      <div className="absolute top-24 h-64 w-[24rem] rounded-xl bg-card/80 shadow-[0_18px_60px_rgba(0,0,0,0.05)]" />
      <div className="relative mt-16 w-full max-w-[27rem] rounded-xl bg-card p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium leading-[1.3]">
            Complete Profile
          </h3>
          <div className="flex items-center gap-2.5">
            <span className="text-xl font-medium leading-[1.3] text-muted-foreground">
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
                <p className="text-base font-medium leading-[1.35]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-[1.4] text-muted-foreground">
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
