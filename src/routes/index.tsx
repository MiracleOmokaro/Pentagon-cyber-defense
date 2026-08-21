import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { RiskCompare } from "@/components/risk-compare";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/site-shell";
import { attackStats, processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-28 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow>Private assessments · Fitted cost</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl lg:text-6xl">
            Protect your systems without a public listing — or a gamble on who you hire.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            We help personal websites, startups, and growing companies find what is
            actually exposed, then give a clear, ordered plan to fix it. Controlled.
            Private. Priced like a startup expense, not an enterprise program.
          </p>
          <div className="mt-9 mb-16 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Request an assessment</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/insights">View threat data</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section className="border-t border-border pt-16">
        <Eyebrow>The reality</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight">
          Attacks are frequent. Recovery is more expensive than starting the business.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {attackStats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-3xl tabular-nums tracking-tight text-fg">{s.value}</p>
              <p className="mt-3 text-sm font-medium text-fg">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-subtle">{s.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Who this is for</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium tracking-tight">
              Any business that is online — including the site nobody is watching.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Large organisations already have internal teams, large retainers, or public
              reward programs. Everyone else is left to search for a “security
              professional” and hope they are not incompetent. That is the gap we occupy.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              We do not list your systems for the world to attack. We run a private,
              scoped review and hand you a fix plan you can actually use.
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/services">
                See services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <RiskCompare />
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-3 text-3xl font-medium tracking-tight">Four steps. No theatre.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.n} className="rounded-lg border border-border bg-surface p-5">
              <p className="font-mono text-xs text-accent">{step.n}</p>
              <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-xl border border-border bg-surface px-6 py-12 sm:px-12">
          <Eyebrow>Next</Eyebrow>
          <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-tight">
            Stop guessing. Get a private picture of where you actually stand.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Tell us what you run. We reply with a scoped plan and a fitted price — not
            an enterprise catalogue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact">Request assessment</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">Who we are</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
