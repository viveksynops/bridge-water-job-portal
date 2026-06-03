export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className="h-[1.38rem] overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full bg-foreground ${className}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
