import { MousePointer2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadMockup() {
  return (
    <div className="relative mx-auto flex min-h-[23rem] w-full max-w-[31rem] items-center justify-center">
      <div className="absolute top-20 h-64 w-[21rem] rounded-xl bg-card/70 shadow-[0_18px_60px_rgba(0,0,0,0.04)]" />
      <div className="absolute top-24 h-64 w-[24rem] rounded-xl bg-card/80 shadow-[0_18px_60px_rgba(0,0,0,0.05)]" />
      <div className="relative mt-16 w-full max-w-[29rem] rounded-xl bg-card p-6 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium leading-[1.3]">
            Upload Your Document
          </h3>
          <div className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <X />
          </div>
        </div>

        <div className="relative mt-6 flex h-44 flex-col items-center justify-center rounded-xl border border-foreground/30">
          <MousePointer2 className="absolute right-20 top-11 text-foreground" />
          <Upload />
          <p className="mt-4 text-sm leading-[1.4] text-muted-foreground">
            Drag & Drop your file or{" "}
            <span className="font-semibold text-foreground">browse</span>
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm leading-[1.4] text-muted-foreground">
            Supported formats: PNG, JPG, PDF, MP4
          </p>
          <Button className="h-9 rounded-md px-5 text-sm font-medium leading-[1.4]">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
