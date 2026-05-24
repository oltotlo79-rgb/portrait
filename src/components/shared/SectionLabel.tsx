import { cn } from "@/lib/cn";

type Props = {
  number?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ number, children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em]",
        className,
      )}
    >
      {number && <span className="opacity-60">{number}</span>}
      <span className="h-px w-8 bg-current opacity-40" aria-hidden />
      <span>{children}</span>
    </span>
  );
}
