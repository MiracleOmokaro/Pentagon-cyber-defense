import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M16 3.2 27.2 11.2v9.6L16 28.8 4.8 20.8v-9.6L16 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 9.2 22.4 13.6v5.8L16 23.8 9.6 19.4v-5.8L16 9.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-accent"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-fg", className)}>
      <LogoMark />
      <span className="leading-tight">
        <span className="block font-medium tracking-tight">Pentagon</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          Cyber Defense
        </span>
      </span>
    </span>
  );
}
