import { useState } from "react";
import { stages, type BusinessStage } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const order: BusinessStage[] = ["personal", "micro", "growing"];

export function RiskCompare() {
  const [stage, setStage] = useState<BusinessStage>("micro");
  const data = stages[stage];

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
        Fitted to your stage
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {order.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setStage(key)}
            className={cn(
              "h-11 rounded-full border px-4 text-sm transition-colors duration-150",
              stage === key
                ? "border-primary bg-primary text-primary-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {stages[key].title}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg bg-elevated p-5">
          <p className="text-xs uppercase tracking-wider text-subtle">If you get hit</p>
          <p className="mt-2 font-mono text-3xl tabular-nums tracking-tight text-danger">
            {data.attackCost}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{data.startCost}</p>
        </div>
        <div className="rounded-lg bg-elevated p-5">
          <p className="text-xs uppercase tracking-wider text-subtle">What we do instead</p>
          <p className="mt-2 text-xl font-medium tracking-tight text-fg">{data.assessment}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{data.assessmentNote}</p>
        </div>
      </div>
      <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
        {data.risks.map((r) => (
          <li key={r} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
