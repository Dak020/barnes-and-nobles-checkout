import { useEffect, useState } from "react";
const LOGO_URL = "/neiman-marcus-logo.svg";

export const REDIRECT_URL =
  "https://giftclick.org/?offer_id=4448&aff_id=28799&source=Q4";

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

export const T = {
  en: {
    deals: "BLACK FRIDAY SALE",
    upTo: "Up to 60% off",
    after: "after completing 5 sponsored deals",
    title: "Claim Your Discount",
    subtitle: "Follow these steps to claim your $750 Neiman Marcus Black Friday discount",
    steps: ['Click on "Claim Now"', "Start the sign up process", "Complete 3‑5 sponsored deals", "Enjoy your discount!"],
    cta: "Claim Now",
    agree: 'By clicking "Claim Now", you agree to complete the required steps to receive your gift card.',
    howTitle: "How to Use Your Savings",
    follow: "Follow these steps:",
    how1: "Add your favorite items to your cart.",
    how2: "Continue to checkout on",
    how3: "Your eligible savings and member offers will apply automatically at checkout.",
    tipsTitle: "Important Tips:",
    tips: [
      "Most Neiman Marcus discounts do not require manually typing a promo code.",
      "Discounts are usually applied automatically at checkout.",
      "Some offers may be limited-time or member-only.",
      "Make sure all activation steps are completed before checkout.",
    ],
    more: "For more information, visit",
    terms: "User Agreement",
    privacy: "Privacy Policy",
  },
  es: {
    deals: "VENTA DE BLACK FRIDAY",
    upTo: "Hasta 60% de descuento",
    after: "al completar 5 ofertas patrocinadas",
    title: "Reclama Tu Descuento",
    subtitle: "Sigue estos pasos para reclamar tu descuento de Black Friday de $750 de Neiman Marcus",
    steps: ['Haz clic en "Reclamar Ahora"', "Inicia el proceso de registro", "Completa de 3 a 5 ofertas patrocinadas", "¡Disfruta tu descuento!"],
    cta: "Reclamar Ahora",
    agree: 'Al hacer clic en "Reclamar Ahora", aceptas completar los pasos requeridos para recibir tu tarjeta de regalo.',
    howTitle: "Cómo Usar Tus Ahorros",
    follow: "Sigue estos pasos:",
    how1: "Agrega tus artículos favoritos al carrito.",
    how2: "Continúa al pago en",
    how3: "Tus ahorros y ofertas para miembros se aplicarán automáticamente al pagar.",
    tipsTitle: "Consejos Importantes:",
    tips: [
      "La mayoría de los descuentos de Neiman Marcus no requieren escribir un código promocional.",
      "Los descuentos normalmente se aplican automáticamente al pagar.",
      "Algunas ofertas pueden ser por tiempo limitado o solo para miembros.",
      "Asegúrate de completar todos los pasos de activación antes de pagar.",
    ],
    more: "Para más información, visita",
    terms: "Acuerdo de Usuario",
    privacy: "Política de Privacidad",
  },
};

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");

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

  const t = T[lang];
  const site = (
    <a href="https://www.neimanmarcus.com" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">NeimanMarcus.com</a>
  );

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8">
      {/* Top deals banner */}
      <div className="-mx-4 -mt-8 mb-3 self-stretch bg-primary text-primary-foreground px-5 py-3 flex items-center gap-4 text-sm">
        <span className="font-semibold tracking-wide whitespace-nowrap">{t.deals}</span>
        <span className="h-5 w-px bg-white/40 shrink-0" />
        <span className="leading-snug"><span className="font-bold">{t.upTo}</span> {t.after}</span>
      </div>
      {/* Language toggle */}
      <button
        onClick={() => setLang(lang === "en" ? "es" : "en")}
        className="self-end rounded-full border border-border bg-card px-4 py-1 text-xs font-bold shadow-sm text-foreground"
      >
        {lang === "en" ? "Español" : "English"}
      </button>
      {/* Header */}
      <img src={LOGO_URL} alt="Neiman Marcus" className="h-16 w-auto mt-2 mb-3 self-center" />

      {/* Title */}
      <h2 className="text-xl font-bold text-primary text-center mb-1 uppercase tracking-wide">
        {t.title}
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-6 max-w-xs">
        {t.subtitle}
      </p>

      {/* Steps */}
      <div className="w-full max-w-md space-y-3 mb-8">
        {t.steps.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3.5 shadow-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <span className="text-sm font-medium text-foreground">{text}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <a
        href={REDIRECT_URL}
        className="block w-full max-w-md rounded-full bg-cta py-4 text-center text-base font-bold tracking-wide text-cta-foreground uppercase shadow-md active:scale-[0.97] transition-transform"
      >
        {t.cta}
      </a>
      <p className="mt-3 text-xs text-muted-foreground text-center max-w-xs">{t.agree}</p>

      {/* How to use code */}
      <div className="w-full max-w-md mt-10 space-y-4">
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">{t.howTitle}</h3>
        <div className="rounded-lg border border-border bg-card p-4 space-y-3 text-sm text-foreground">
          <p className="font-semibold">{t.follow}</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>{t.how1}</li>
            <li>{t.how2} {site}.</li>
            <li>{t.how3}</li>
          </ol>
          <p className="font-semibold">{t.tipsTitle}</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {t.tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
          <p>{t.more} {site}.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 mb-4 flex items-center gap-2 text-xs font-semibold text-primary">
        <a href="#" className="underline">{t.terms}</a>
        <span>·</span>
        <a href="#" className="underline">{t.privacy}</a>
        <span>·</span>
        <a href="https://www.neimanmarcus.com" className="underline">NeimanMarcus.com</a>
      </div>
    </div>
  );
};

export default Index;
