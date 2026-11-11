import { describe, it, expect } from "vitest";
import { REDIRECT_URL, T } from "../pages/Index";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("uses the requested Spirit Halloween offer link", () => {
    expect(REDIRECT_URL).toBe(
      "https://linkthem.net/?offer_id=5569&aff_id=28799&source=GOD"
    );
  });

  it("uses Spirit Christmas wording and the 3-to-5 deal range in both languages", () => {
    expect(T.en.subtitle).toBe("Follow these steps to claim your $500 Spirit Christmas discount");
    expect(T.es.subtitle).toBe("Sigue estos pasos para reclamar tu descuento de $500 de Spirit Christmas");
    expect(T.en.steps[2]).toBe("Complete 3‑5 sponsored deals");
    expect(T.es.steps[2]).toBe("Completa de 3 a 5 ofertas patrocinadas");
    expect(T.en.after).toBe("after completing 5 sponsored deals");
    expect(T.es.after).toBe("al completar 5 ofertas patrocinadas");
  });
});
