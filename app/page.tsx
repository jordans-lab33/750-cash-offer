"use client";

import { HelpCircle } from "lucide-react";
import Image from "next/image";
// ============================================
// CUSTOMIZE YOUR REDIRECT LINK HERE:
const REDIRECT_URL = "https://giftclick.org/aff_c?offer_id=3004&aff_id=147515";
// ============================================

const steps = [
  {
    number: 1,
    title: "Sign Up & Enter Basics",
    description: "Enter your email + basic details so we can set up your reward profile.",
  },
  {
    number: 2,
    title: "Complete Sponsored Deals",
    description:
      "Complete 3-5 deals to start earning. Continue completing deals to increase total payout.",
  },
  {
    number: 3,
    title: "Get Whole Foods Credit",
    description: "Receive your Whole Foods credits as you earn — up to $500 total."
  },
];

export default function WholeFoodsPage() {
  const handleClaim = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Whole Foods green header section */}
      <div style={{ background: "#00563f" }} className="shadow-[0_4px_12px_0_rgba(0,0,0,0.15)]">
        <div className="max-w-md mx-auto px-4 pt-6 pb-5">
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-11-08%20at%2014.38.40-nwyfmfuNWSSBmcJP7FgFZHbk6O03Lb.png"
              alt="Whole Foods Market logo"
              width={998}
              height={298}
              className="h-auto w-full max-w-[320px] object-contain"
              unoptimized
            />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white mb-1 text-balance">
              Claim Your Rewards
            </h1>
            <p className="text-white/80 text-sm">
              {"Here's how to claim your $500 in Whole Foods Giftcards"}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content — white background */}
      <div className="max-w-md mx-auto px-4 pt-8 pb-28">
        {/* Reward Banner - Whole Foods Gift Card */}
        <div className="mb-7 px-6">
          <div className="rounded-2xl bg-[#00563f] px-6 py-8 text-center text-white shadow-sm" role="img" aria-label="$500 Whole Foods Gift Card">
            <div className="text-4xl font-extrabold">$500</div>
            <div className="mt-1 text-sm text-white/80">Whole Foods Gift Card</div>
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
              className="bg-card rounded-2xl border border-border shadow-sm p-4 flex gap-4"
              style={{ borderLeft: "4px solid #00563f" }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#00563f" }}
              >
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
        <div className="bg-card rounded-2xl border border-border p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-muted-foreground" />
            <span className="font-bold text-foreground text-sm">Program Details</span>
          </div>

          <h4 className="font-bold text-foreground text-sm mb-1">
            What do I complete?
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Deals include completing surveys, free trials, and app downloads. You choose which ones from the available list of options.
          </p>

          <h4 className="font-bold text-foreground text-sm mb-1">
            When will I receive my vouchers?
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Once your deals are verified, your Whole Foods voucher code will be delivered to your email within 24-48hrs.
          </p>

          <h4 className="font-bold text-foreground text-sm mb-1">
            Do I need to finish all of the deals?
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No, you only need to complete the first 3-5 deals to claim a reward. Each deal completed after gets credited, up to a max of $500.
          </p>
        </div>

        {/* Disclaimer Text */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            This promotion is independently managed by stepreward.com. Whole Foods
            is not a direct sponsor or affiliate of this specific recruitment panel. All
            trademarks, including the Whole Foods logo, are the property of their
            respective owners. Participation is subject to the terms of the research
            program and requires completion of selected sponsor-supported tasks.
            Vouchers are provided upon successful validation of panel contributions.
          </p>
        </div>
      </div>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleClaim}
            className="w-full py-4 px-6 font-bold text-base rounded-2xl flex items-center justify-center gap-2 shadow-md transition-all duration-150 hover:opacity-90 active:scale-95 active:shadow-sm active:opacity-80"
            style={{ background: "#00563f", color: "#ffffff" }}
          >
            Claim Whole Foods Credit
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
