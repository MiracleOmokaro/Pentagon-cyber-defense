import { createFileRoute } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Eyebrow, Section } from "@/components/site-shell";
import {
  breachCosts,
  regions,
  sectorTrends,
  sources,
  weeklyAttacks,
} from "@/lib/site-data";

export const Route = createFileRoute("/insights")({ component: InsightsPage });

function ChartTooltip({
  active,
  payload,
  label,
  suffix,
}: {
  active?: boolean;
  payload?: { value?: number }[];
  label?: string;
  suffix: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-border bg-elevated px-3 py-2 text-xs text-fg">
      <p className="text-muted">{label}</p>
      <p className="mt-1 font-mono tabular-nums">
        {payload[0]?.value}
        {suffix}
      </p>
    </div>
  );
}

function InsightsPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Eyebrow>Threat intelligence</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
          Precise picture of who is hit, how, and what it costs.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Compiled from 2025–2026 industry reports. Use this to see why a private
          assessment is cheaper than waiting. Figures are averages from named
          sources, not a promise about your environment.
        </p>
      </Section>

      <Section id="volume" className="pt-0">
        <h2 className="text-2xl font-medium tracking-tight">Weekly attack volume by sector</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Education remains the most attacked industry by weekly volume per
          organisation. Global average sits near two thousand attempts a week.
        </p>
        <div className="mt-8 h-72 w-full rounded-xl border border-border bg-surface p-4 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyAttacks} layout="vertical" margin={{ left: 8, right: 12 }}>
              <CartesianGrid stroke="var(--color-border)" horizontal={false} />
              <XAxis
                type="number"
                stroke="var(--color-subtle)"
                tick={{ fill: "var(--color-subtle)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="sector"
                width={88}
                stroke="var(--color-subtle)"
                tick={{ fill: "var(--color-muted)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip suffix=" / week" />} cursor={{ fill: "var(--color-elevated)" }} />
              <Bar dataKey="weekly" fill="var(--color-accent)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section id="cost" className="border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">Average breach cost by sector</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Healthcare has led average breach cost for more than a decade. Finance and
          industrial follow. These are large-organisation averages; small firms still
          see costs that exceed their startup capital.
        </p>
        <div className="mt-8 h-72 w-full rounded-xl border border-border bg-surface p-4 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={breachCosts} margin={{ left: 0, right: 8, bottom: 24 }}>
              <CartesianGrid stroke="var(--color-border)" vertical={false} />
              <XAxis
                dataKey="sector"
                stroke="var(--color-subtle)"
                tick={{ fill: "var(--color-subtle)", fontSize: 11 }}
                interval={0}
                angle={-28}
                textAnchor="end"
                height={56}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                stroke="var(--color-subtle)"
                tick={{ fill: "var(--color-subtle)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                unit="M"
              />
              <Tooltip content={<ChartTooltip suffix="M USD" />} cursor={{ fill: "var(--color-elevated)" }} />
              <Bar dataKey="cost" fill="var(--color-fg)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <Section id="sectors" className="border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">Peculiar trends by sector</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-subtle">
                <th className="py-3 pr-4 font-medium">Sector</th>
                <th className="py-3 pr-4 font-medium">Peculiar trend</th>
                <th className="py-3 pr-4 font-medium">Typical vectors</th>
                <th className="py-3 pr-4 font-medium">Avg. breach</th>
                <th className="py-3 font-medium">Why</th>
              </tr>
            </thead>
            <tbody>
              {sectorTrends.map((row) => (
                <tr key={row.sector} className="border-b border-border/70 align-top">
                  <td className="py-3 pr-4 font-medium text-fg">{row.sector}</td>
                  <td className="py-3 pr-4 text-muted">{row.trend}</td>
                  <td className="py-3 pr-4 text-muted">{row.vectors}</td>
                  <td className="py-3 pr-4 font-mono tabular-nums text-fg">{row.cost}</td>
                  <td className="py-3 text-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="regions" className="border-t border-border">
        <h2 className="text-2xl font-medium tracking-tight">Attack vectors by region</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {regions.map((r) => (
            <article key={r.region} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-medium">{r.region}</h3>
              <p className="mt-2 text-sm text-muted">{r.vectors}</p>
              <p className="mt-3 text-xs leading-relaxed text-subtle">{r.note}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Identity and phishing are nearly universal. Exploitation of public-facing
          applications and exposed infrastructure is especially common in Europe,
          Asia-Pacific, and parts of Africa and the Middle East.
        </p>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Sources</Eyebrow>
        <ul className="mt-4 space-y-1 text-sm text-muted">
          {sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-subtle">
          Costs are average total breach costs, not ransom alone. Sector ranking
          differs slightly between volume studies and cost studies.
        </p>
      </Section>
    </>
  );
}
