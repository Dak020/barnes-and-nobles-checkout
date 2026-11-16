import { describe, it, expect } from "vitest";
import { REDIRECT_URL, T } from "../pages/Index";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("uses the requested Neiman Marcus offer link", () => {
    expect(REDIRECT_URL).toBe(
      "https://giftclick.org/?offer_id=4448&aff_id=28799&source=Q4"
    );
  });

  it("uses Black Friday $750 wording and the 3-to-5 deal range in both languages", () => {
    expect(T.en.subtitle).toBe("Follow these steps to claim your $750 Neiman Marcus Black Friday discount");
    expect(T.es.subtitle).toBe("Sigue estos pasos para reclamar tu descuento de Black Friday de $750 de Neiman Marcus");
    expect(T.en.steps[2]).toBe("Complete 3‑5 sponsored deals");
    expect(T.es.steps[2]).toBe("Completa de 3 a 5 ofertas patrocinadas");
    expect(T.en.after).toBe("after completing 5 sponsored deals");
    expect(T.es.after).toBe("al completar 5 ofertas patrocinadas");
  });
});
