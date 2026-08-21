import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "@/components/site-shell";
import { principles, rules } from "@/lib/site-data";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">
          A lean, founder-operated cybersecurity services company.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Pentagon Cyber Defense is built by a focused team of five. We have no
          employees — only the founding team and carefully selected independent
          operators when a client needs them. We are building a real company,
          structured for registration and growth, not a costume of a firm.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="rounded-xl border border-border bg-surface p-6 sm:p-10">
          <Eyebrow>What we are</Eyebrow>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-fg">
            We help any business — from personal websites to startups and growing
            companies — protect their systems through private, controlled security
            assessments and clear, prioritised fix plans. Proper security should be
            an early-stage expense you can actually pay, not a choice between high
            cost and an unreliable stranger.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>How we execute</Eyebrow>
        <h2 className="mt-3 text-3xl font-medium tracking-tight">Principles</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-lg border border-border bg-surface p-5">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Operating rules</Eyebrow>
        <ol className="mt-6 space-y-3">
          {rules.map((r, i) => (
            <li key={r} className="flex gap-4 text-sm leading-relaxed text-muted">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              {r}
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border">
        <Eyebrow>Around the core offer</Eyebrow>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium">Awareness & coordination</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Many owners only have a vague sense that something could go wrong. We
              explain the real risk in plain language and help coordinate the work —
              the local relationship layer, not a public hunt.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Skill pipeline</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We develop practical ability in people who can actually find and explain
              holes, then put only those operators on client work. Certificates are
              not the proof. Output is.
            </p>
          </div>
        </div>
        <Button asChild className="mt-10">
          <Link to="/contact">Work with us</Link>
        </Button>
      </Section>
    </>
  );
}
