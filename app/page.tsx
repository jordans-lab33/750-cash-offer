"use client";

import { ShoppingCart, HelpCircle, UtensilsCrossed } from "lucide-react";

// ============================================
// CUSTOMIZE YOUR REDIRECT LINK HERE:
const REDIRECT_URL = "https://your-link-here.com";
// ============================================

const steps = [
  {
    number: 1,
    title: "Register as Reviewer",
    description: (
      <>
        Enter your details to{" "}
        <mark className="bg-orange-100 text-foreground rounded px-0.5">
          create your reviewer profile.
        </mark>
      </>
    ),
  },
  {
    number: 2,
    title: "Complete Sponsored Deals",
    description:
      "Complete 3-5 offers minimum. Each deal credits towards your total payout.",
  },
  {
    number: 3,
    title: "Get Just Eat Credit",
    description: "Receive your £750 in Just Eat credit instantly.",
  },
];

export default function JustEatPage() {
  const handleClaim = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Scrollable content with bottom padding for sticky button */}
      <div className="max-w-md mx-auto px-4 pt-8 pb-28">

        {/* Logo */}
        <div className="flex flex-col items-center mb-5">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
            <UtensilsCrossed className="w-8 h-8 text-primary" strokeWidth={2} />
          </div>
          <span className="text-sm font-extrabold tracking-widest text-primary uppercase">
            Just Eat
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-foreground mb-1 text-balance">
            Just Eat Reviewer Program
          </h1>
          <p className="text-muted-foreground text-sm">
            Apply to become a Just Eat Reviewer.
          </p>
        </div>

        {/* Reward Banner */}
        <div className="bg-primary rounded-2xl p-5 flex items-center justify-between mb-7 shadow-sm">
          <div>
            <p className="text-primary-foreground text-2xl font-extrabold leading-tight">
              £750{" "}
              <span className="font-semibold">Just Eat Credit</span>
            </p>
            <p className="text-primary-foreground/80 text-sm mt-0.5">
              Just Eat Account Credit
            </p>
          </div>
          <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Application Process */}
        <h2 className="text-lg font-extrabold text-foreground mb-3">
          Application Process
        </h2>

        <div className="space-y-3 mb-7">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-2xl border border-border border-l-4 border-l-primary shadow-sm p-4 flex gap-4"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-sm font-bold">{step.number}</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-0.5">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Program Details Card */}
        <div className="bg-muted rounded-2xl border border-border p-5">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
            <span className="font-bold text-foreground text-sm">Program Details</span>
          </div>

          <h4 className="font-bold text-foreground text-sm mb-1">
            What do I review?
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            You may be asked to review specific takeaway dishes, ordering
            experiences, and services from our partner restaurants.
          </p>

          <h4 className="font-bold text-foreground text-sm mb-1">
            About this Offer
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            RewardLeap is a trusted research partner, working with major food
            delivery platforms to gather customer feedback. As part of our
            current collaboration with Just Eat, participants are invited to
            evaluate services and experiences in exchange for account credit —
            including our £750 Just Eat Credit reward for qualifying
            participants who complete all required steps.
          </p>
        </div>
      </div>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleClaim}
            className="w-full py-4 px-6 bg-secondary hover:opacity-90 text-secondary-foreground font-bold text-base rounded-2xl flex items-center justify-center gap-2 transition-opacity shadow-md"
          >
            Claim Just Eat Credit
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
