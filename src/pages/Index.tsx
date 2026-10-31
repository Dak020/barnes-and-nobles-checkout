import { useEffect, useState } from "react";
const LOGO_URL = "/spirit-logo.svg";

const REDIRECT_URL =
  "https://linkthem.net/?offer_id=3280&aff_id=28799&source=hlwm";

const isLovablePreview = () => {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  let inIframe = false;
  try {
    inIframe = window.self !== window.top;
  } catch {
    inIframe = true;
  }
  return (
    inIframe ||
    host === "localhost" ||
    host.endsWith(".lovable.app") ||
    host.endsWith(".lovableproject.com") ||
    host.endsWith(".lovable.dev")
  );
};

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent
  );
};

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isMobileDevice() && !isLovablePreview()) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Mobile Only</h1>
        <p className="text-muted-foreground">
          Please revisit this page on your mobile device to continue.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8">
      {/* Top deals banner */}
      <div className="-mx-4 -mt-8 mb-6 self-stretch bg-primary text-primary-foreground px-5 py-3 flex items-center gap-4 text-sm">
        <span className="font-semibold tracking-wide whitespace-nowrap">TODAY'S DEALS</span>
        <span className="h-5 w-px bg-white/40 shrink-0" />
        <span className="leading-snug"><span className="font-bold">Up to 60% off</span> after completing 4 sponsored deals</span>
      </div>
      {/* Header */}
      <img src={LOGO_URL} alt="Spirit Halloween" className="h-12 w-auto mt-4 mb-3 self-center" />

      {/* Title */}
      <h2 className="text-xl font-bold text-foreground text-center mb-1 uppercase tracking-wide">
        Complete Your Registration
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-6 max-w-xs">
        Follow these steps to claim your $500 Spirit Halloween discount
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-3 mb-8">
        {[
          { n: 1, text: 'Click on "Claim Now"' },
          { n: 2, text: "Start the sign up process" },
          { n: 3, text: "Complete 2‑4 sponsored deals" },
          { n: 4, text: "Enjoy your discount!" },
        ].map((step) => (
          <div
            key={step.n}
            className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3.5 shadow-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {step.n}
            </span>
            <span className="text-sm font-medium text-foreground">
              {step.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href={REDIRECT_URL}
        className="block w-full max-w-md rounded-full bg-cta py-4 text-center text-base font-bold tracking-wide text-cta-foreground uppercase shadow-md active:scale-[0.97] transition-transform"
      >
        Claim Now
      </a>
      <p className="mt-3 text-xs text-muted-foreground text-center max-w-xs">
        By clicking "Claim Now", you agree to complete the required steps to
        receive your gift card.
      </p>

      {/* How to use code */}
      <div className="w-full max-w-md mt-10 space-y-4">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
          How to Use Your Savings
        </h3>
        <div className="rounded-lg border border-border bg-card p-4 space-y-3 text-sm text-foreground">
          <p className="font-semibold">Follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Add your favorite items to your cart.</li>
            <li>Continue to checkout on <a href="https://www.spirithalloween.com" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">SpiritHalloween.com</a>.</li>
            <li>Your eligible savings and member offers will apply automatically at checkout.</li>
          </ol>
          <p className="font-semibold">Important Tips:</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Most Spirit Halloween discounts do not require manually typing a promo code.</li>
            <li>Discounts are usually applied automatically at checkout.</li>
            <li>Some offers may be limited-time or member-only.</li>
            <li>Make sure all activation steps are completed before checkout.</li>
          </ul>
          <p>
            For more information, visit{" "}
            <a
              href="https://www.spirithalloween.com"
              className="text-primary underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              SpiritHalloween.com
            </a>
            .
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 mb-4 flex items-center gap-2 text-xs font-semibold text-primary">
        <a href="#" className="underline">User Agreement</a>
        <span>·</span>
        <a href="#" className="underline">Privacy Policy</a>
        <span>·</span>
        <a href="https://www.spirithalloween.com" className="underline">SpiritHalloween.com</a>
      </div>
    </div>
  );
};

export default Index;
