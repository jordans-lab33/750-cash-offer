"use client";

import { HelpCircle } from "lucide-react";
import Image from "next/image";

// ============================================
// CUSTOMIZE YOUR REDIRECT LINK HERE:
const REDIRECT_URL = "https://giftclick.org/aff_c?offer_id=1180&aff_id=147515";
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
      "Complete 3-5 offers minimum. Each deal credits towards your total payout.",
  },
  {
    number: 3,
    title: "Get Walmart Credit",
    description: "Receive your $750 in Walmart credit instantly.",
  },
];

export default function WalmartPage() {
  const handleClaim = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-muted font-sans">
      {/* White background header section — shadow on bottom border */}
      <div className="bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.08)]">
        <div className="max-w-md mx-auto px-4 pt-6 pb-5">
          {/* Logo */}
          <div className="flex justify-center mb-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-08%20at%2011.01.23-I7g4Df82aOHy6BDczyEFK3s94HHxyz.png"
              alt="Walmart logo"
              width={160}
              height={60}
              className="object-contain bg-transparent"
              unoptimized
            />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-foreground mb-1 text-balance">
              Unlock Walmart Rewards
            </h1>
            <p className="text-muted-foreground text-sm">
              {"Here's how to claim your $750 in Walmart Giftcards"}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content with light grey background */}
      <div className="max-w-md mx-auto px-4 pt-8 pb-28">
        {/* Reward Banner - Walmart Gift Card */}
        <div className="mb-7 animate-float px-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-08%20at%2011.01.04-8O2NWLrJc4WPitqYTfUxs3iCnEPhxF.png"
            alt="$750 Walmart Gift Card"
            width={280}
            height={160}
            className="w-full object-cover rounded-2xl shadow-lg"
            unoptimized
          />
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
              style={{ borderLeft: "4px solid #0b61cb" }}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#0b61cb" }}
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
            What do I review?
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            You may be asked to try mobile apps, free trials, or give reviews with our partners.
          </p>

          <h4 className="font-bold text-foreground text-sm mb-1">
            About this Offer
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            StepReward is a trusted research partner, working with major US
            platforms to gather customer insights. By participating in our
            digital tasks, you earn points redeemable in account credit for
            Walmart when completing required steps.
          </p>
        </div>

        {/* Walmart | StepReward Footer Section */}
        <div className="flex justify-center mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-01%20at%2019.18.18-47pwOitxqHBh8MJzGMWCz3v1PsFjah.png"
            alt="Walmart and StepReward partnership"
            width={300}
            height={80}
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Disclaimer Text */}
        <div className="text-center mb-4">
          <p className="text-muted-foreground text-xs leading-relaxed">
            This promotion is independently managed by stepreward.com. Walmart
            is not a direct sponsor or affiliate of this specific recruitment panel. All
            trademarks, including the Walmart logo, are the property of their
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
            style={{ background: "#ffc300", color: "#0b61cb" }}
          >
            Claim Walmart Credit
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
