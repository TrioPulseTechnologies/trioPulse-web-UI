"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import { SERVICES } from "@/lib/constants";

type BookCallModalProps = {
    open: boolean;
    onClose: () => void;
};

export function BookCallModal({ open, onClose }: BookCallModalProps) {
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    if (!open) return null;

    const validatePhone = (phoneNumber: string): boolean => {
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return phoneRegex.test(phoneNumber.replace(/\s/g, ""));
    };

    const handleClose = () => {
        setPhone("");
        setService("");
        setSubmitted(false);
        setLoading(false);
        setPhoneError("");
        onClose();
    };

    async function handleSubmit(e: any) {
        e.preventDefault();

        if (!validatePhone(phone)) {
            setPhoneError("Please enter a valid phone number");
            return;
        }

        setPhoneError("");
        setLoading(true);
        const formData = {
            contact: phone,
            service,
        };

        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
            setLoading(false);
            setSubmitted(true);
        }
    }

    return (
        <aside
            className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-call-title"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
        >
            <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-violet-200/70 bg-gradient-to-br from-violet-50/95 via-background/90 to-sky-50/75 px-6 pt-4 pb-6 shadow-2xl shadow-slate-950/20 sm:px-8 sm:pt-5 sm:pb-8">
                <button
                    type="button"
                    onClick={handleClose}
                    className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                    aria-label="Close booking form"
                >
                    <X className="h-5 w-5" aria-hidden="true" />
                </button>

                <div className="flex flex-col items-center gap-1 text-center">
                    <div className="flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
                        <Image
                            src="/triopulse-header-logo.svg"
                            alt="TrioPulse"
                            width={150}
                            height={32}
                            className="h-28 w-auto sm:h-36"
                            priority
                        />
                    </div>
                    <h2 id="book-call-title" className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                        Say goodbye to hold times! <span aria-hidden>🎉</span>
                    </h2>
                    <p className="max-w-xs text-sm leading-6 text-slate-700 sm:text-base">
                        Leave your details and we'll be in touch to explore how we can help.
                    </p>
                </div>

                <div className="mt-8">
                    {submitted ? (
                        <div className="rounded-[1.75rem] border border-violet-200 bg-white p-6 text-center shadow-sm">
                            <p className="text-lg font-semibold text-slate-950">You&apos;re all set!</p>
                            <p className="mt-2 text-sm text-slate-600">
                                We&apos;ll call you shortly on the number you provided.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                    if (phoneError) setPhoneError("");
                                }}
                                placeholder="Enter your phone number"
                                required
                                className={`w-full rounded-[1.5rem] border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition ${phoneError ? "border-red-500 focus:border-red-400 focus:ring-2 focus:ring-red-100" : "border-slate-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                                    }`}
                            />
                            {phoneError && <p className="text-xs text-red-500 font-medium">{phoneError}</p>}

                            <label className="block text-sm font-medium text-slate-700">I want to speak about...</label>
                            <div className="rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3">
                                <select
                                    value={service}
                                    onChange={(event) => setService(event.target.value)}
                                    required
                                    className="w-full bg-transparent text-sm text-slate-900 outline-none"
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    {SERVICES.map((item) => (
                                        <option key={item.id} value={item.title}>
                                            {item.title}
                                        </option>
                                    ))}
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex w-full items-center justify-center rounded-[1.5rem] bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading ? "Waiting your call..." : "Waiting your call!"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </aside>
    );
}
