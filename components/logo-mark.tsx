export function LogoMark() {
  return (
    <div className="flex items-center gap-2.5" aria-label="Verixa">
      <span className="relative size-10 overflow-hidden" aria-hidden="true">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-foreground [clip-path:polygon(0_0,100%_50%,0_100%)]" />
        <span className="absolute inset-y-0 right-0 w-1/2 bg-foreground [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
      </span>
      <span className="text-2xl font-semibold leading-[1.2]">
        Verixa
      </span>
    </div>
  );
}
