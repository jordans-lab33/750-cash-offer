"use client";

import { Clock, FileText, CheckCircle2, ChevronRight } from "lucide-react";

// ============================================
// CUSTOMIZE YOUR REDIRECT LINK HERE:
const REDIRECT_URL = "https://your-link-here.com";
// ============================================

const steps = [
  {
    icon: FileText,
    title: "Step 1 — Enter Basics",
    description:
      "Tap continue and submit your email + basic details so we can set up your reward profile.",
  },
  {
    icon: CheckCircle2,
    title: "Step 2 — Complete 3-5 Deals",
    description:
      "Choose quick offers. Each completed deal credits toward your $750 cash payout.",
  },
  {
    icon: Clock,
    title: "Fast Payout",
    description:
      "Finish the required deals and request your payout. Simple as that.",
  },
];

export default function CashRewardPage() {
  const handleContinue = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      {/* Main Card */}
      <div className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
        <div className="p-6 pb-8">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Quick 2-Step Process
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-bold text-primary mb-2 text-balance">
            Unlock Your $750 Cash
          </h1>
          <p className="text-muted-foreground mb-6">Follow the steps below.</p>

          {/* Progress Bar */}
          <div className="relative mb-2">
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-primary rounded-full" />
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-muted" />
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleContinue}
            className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Time Estimate */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Takes 30-45 minutes. The more deals you do The more you make!
          </p>
        </div>

        {/* Disclaimer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            By continuing, you agree to the promotion's terms. Availability may
            vary by location. Completing required deals is necessary to qualify.
          </p>
        </div>
      </div>
    </main>
  );
}
