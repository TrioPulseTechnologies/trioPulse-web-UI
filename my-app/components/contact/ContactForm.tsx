"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-10 text-center shadow-sm"
        role="status"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Send className="h-8 w-8" aria-hidden />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-gray-900">Message sent!</h3>
        <p className="mt-2 text-gray-600">
          Thank you for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-violet-100 bg-white p-6 shadow-lg shadow-violet-100/30 sm:p-8"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-200"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-200"
          placeholder="Your Company"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-200"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-900 transition focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-200"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-800 disabled:opacity-60 sm:w-auto"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
