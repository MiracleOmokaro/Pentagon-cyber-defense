import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Check } from "../_libs/lucide-react.mjs";
import { a as cn, i as Button, n as Eyebrow, r as Section } from "./router-Do1Ax4g5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DhOivw_a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg placeholder:text-subtle outline-none transition-colors duration-150 focus:border-accent/50 focus:ring-2 focus:ring-accent/30", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("block text-sm font-medium text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-md border border-border bg-elevated px-3 py-2.5 text-sm text-fg placeholder:text-subtle outline-none transition-colors duration-150 focus:border-accent/50 focus:ring-2 focus:ring-accent/30", className),
		...props
	});
}
var STORAGE_KEY = "pcd-inquiries";
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function onSubmit(e) {
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
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
		} catch {}
		setSent(true);
		form.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		className: "pt-16 sm:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Contact" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl font-medium tracking-tight sm:text-5xl",
					children: "Request a private assessment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-relaxed text-muted",
					children: "Tell us what you run and what worries you. We reply with a scoped plan and a fitted price. No public listing. No obligation beyond the conversation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We only take work we can deliver well." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "First reply typically within two business days." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "NDA available before you share sensitive detail." })
					]
				})
			] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center rounded-xl border border-border bg-surface p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-10 items-center justify-center rounded-full bg-elevated text-ok",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-xl font-medium",
						children: "Request received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: "We have your details. We will come back with a scoped conversation — not a generic brochure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "mt-6 w-fit",
						onClick: () => setSent(false),
						children: "Send another"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-xl border border-border bg-surface p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								name: "name",
								autoComplete: "name",
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email",
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "business",
							children: "Business or site"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "business",
							name: "business",
							placeholder: "Company or URL"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "stage",
							children: "Stage"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "stage",
							name: "stage",
							className: "h-11 w-full rounded-md border border-border bg-elevated px-3 text-sm text-fg outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/30",
							defaultValue: "micro",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "personal",
									children: "Personal / grassroots"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "micro",
									children: "Micro / early startup"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "growing",
									children: "Growing small business"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "message",
							children: "What should we look at?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "message",
							name: "message",
							required: true,
							placeholder: "Website, cloud, email, payments, a recent scare — whatever is true."
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-danger",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "mt-6 w-full sm:w-auto",
						children: "Send request"
					})
				]
			})]
		})
	});
}
//#endregion
export { ContactPage as component };
