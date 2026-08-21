import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Eyebrow, Section } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const STORAGE_KEY = "pcd-inquiries";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const stage = String(data.get("stage") || "");
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and a short description are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    const record = {
      name,
      email,
      business,
      stage,
      message,
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setSent(true);
    form.reset();
  }

  return (
    <Section className="pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
            Request a private assessment
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Tell us what you run and what worries you. We reply with a scoped plan
            and a fitted price. No public listing. No obligation beyond the
            conversation.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li>We only take work we can deliver well.</li>
            <li>First reply typically within two business days.</li>
            <li>NDA available before you share sensitive detail.</li>
          </ul>
        </div>

        {sent ? (
          <div className="flex flex-col justify-center rounded-xl border border-border bg-surface p-8">
            <div className="flex size-10 items-center justify-center rounded-full bg-elevated text-ok">
              <Check className="size-5" />
            </div>
            <h2 className="mt-4 text-xl font-medium">Request received</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We have your details. We will come back with a scoped conversation —
              not a generic brochure.
            </p>
            <Button variant="outline" className="mt-6 w-fit" onClick={() => setSent(false)}>
              Send another
            </Button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="business">Business or site</Label>
              <Input id="business" name="business" placeholder="Company or URL" />
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="stage">Stage</Label>
              <select
                id="stage"
                name="stage"
                className="h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30"
                defaultValue="micro"
              >
                <option value="personal">Personal / grassroots</option>
                <option value="micro">Micro / early startup</option>
                <option value="growing">Growing small business</option>
              </select>
            </div>
            <div className="mt-4 space-y-1.5">
              <Label htmlFor="message">What should we look at?</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Website, cloud, email, payments, a recent scare — whatever is true."
              />
            </div>
            {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}
            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Send request
            </Button>
          </form>
        )}
      </div>
    </Section>
  );
}
