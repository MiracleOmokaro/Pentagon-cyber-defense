import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/site-shell";
import { documents, processSteps, stages } from "@/lib/site-data";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
          Private assessment. Clear fix plan. Fitted to your stage.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          The core offer is a controlled review of what you actually run, followed by
          a prioritised roadmap. Awareness, basic compliance guidance, and a practical
          talent pipeline sit around that — they do not replace it.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 lg:grid-cols-3">
          {Object.values(stages).map((s) => (
            <article key={s.title} className="flex flex-col rounded-xl border border-border bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {s.title}
              </p>
              <h2 className="mt-3 text-xl font-medium">{s.assessment}</h2>
              <p className="mt-2 text-sm text-muted">{s.who}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{s.assessmentNote}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs text-subtle">Typical recovery if you wait</p>
                <p className="mt-1 font-mono text-lg tabular-nums text-fg">{s.attackCost}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-subtle">
          Exact figures are set during scoping so the cost stays transparent and matched
          to what you actually need — a startup expense, not an organisation-scale
          security budget.
        </p>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>What you receive</Eyebrow>
        <h2 className="mt-3 text-3xl font-medium tracking-tight">A report you can act on</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "What is broken — named, not vague",
            "How bad it is — priority, not theatre",
            "Exact steps to fix — ordered",
            "Hardware and software in scope",
            "Identity, cloud, and backup gaps",
            "Plain-language briefing for owners, not only engineers",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Process</Eyebrow>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.n}>
              <p className="font-mono text-xs text-accent">{step.n}</p>
              <h3 className="mt-2 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Legal structure</Eyebrow>
        <h2 className="mt-3 text-3xl font-medium tracking-tight">Documents we sign</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((d) => (
            <div key={d.name} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-mono text-sm tracking-wide">{d.name}</h3>
              <p className="mt-2 text-sm text-muted">{d.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted">
          Around the assessment we also cover awareness in plain language and basic
          compliance orientation so you know what standards typically apply before a
          network policy or customer review. That is guidance, not a guarantee of
          certification.
        </p>
        <Button asChild className="mt-8">
          <Link to="/contact">Request a scoped price</Link>
        </Button>
      </Section>
    </>
  );
}
