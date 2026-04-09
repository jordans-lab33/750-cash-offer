"use client";

import { ShoppingCart, HelpCircle } from "lucide-react";
import Image from "next/image";

// ============================================
// CUSTOMIZE YOUR REDIRECT LINK HERE:
const REDIRECT_URL = "https://trksy.org/aff_c?offer_id=4174&aff_id=147515";
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
    title: "Get Uber Eats Credit",
    description: "Receive your £500 in Uber Eats credit instantly.",
  },
];

export default function UberEatsPage() {
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-09%20at%2022.14.14-V1AqAnR6c8CK6klOfRj9jN6YGF99Og.png"
              alt="Uber Eats logo"
              width={200}
              height={60}
              className="object-contain bg-transparent"
              unoptimized
            />
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-foreground mb-1 text-balance">
              Unlock Uber Eats Rewards
            </h1>
            <p className="text-muted-foreground text-sm">
              {"Here's how to claim your £500 in Uber Eats Giftcards"}
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content with light grey background */}
      <div className="max-w-md mx-auto px-4 pt-8 pb-28">
        {/* Reward Banner - Uber Eats Gift Card */}
        <div className="mb-7 animate-float px-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-09%20at%2022.57.46-nmsD39LGVrA38rWiF3FQLyIohSt7Fb.png"
            alt="£750 Uber Eats Gift Card"
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
            StepReward is a trusted research partner, working with major UK
            platforms to gather customer insights. By participating in our
            digital tasks, you earn points redeemable in account credit for
            Uber Eats when completing required steps.
          </p>
        </div>

        {/* Uber Eats | StepReward Footer Logo */}
        <div className="flex justify-center pt-2 pb-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-07%20at%2015.41.38-XM9vmxCMaoYtm2ep2qZUk5Y4R6f681.png"
            alt="Uber Eats and StepReward partnership"
            width={300}
            height={75}
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleClaim}
            className="w-full py-4 px-6 bg-primary hover:opacity-90 text-primary-foreground font-bold text-base rounded-2xl flex items-center justify-center gap-2 transition-opacity shadow-md"
          >
            Claim Uber Eats Credit
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
