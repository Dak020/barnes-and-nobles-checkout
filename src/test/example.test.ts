import { describe, it, expect } from "vitest";
import { REDIRECT_URL, T } from "../pages/Index";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("uses the requested Barnes & Noble offer link", () => {
    expect(REDIRECT_URL).toBe(
      "https://giftclick.org/?offer_id=4347&aff_id=28799&source=B2"
    );
  });

  it("uses Black Friday $500 wording and the 3-to-5 deal range in both languages", () => {
    expect(T.en.subtitle).toBe("Follow these steps to claim your $500 Barnes & Noble Black Friday discount");
    expect(T.es.subtitle).toBe("Sigue estos pasos para reclamar tu descuento de Black Friday de $500 de Barnes & Noble");
    expect(T.en.steps[2]).toBe("Complete 3‑5 sponsored deals");
    expect(T.es.steps[2]).toBe("Completa de 3 a 5 ofertas patrocinadas");
    expect(T.en.after).toBe("after completing 5 sponsored deals");
    expect(T.es.after).toBe("al completar 5 ofertas patrocinadas");
  });

  it("instructs shoppers to enter promo codes manually at checkout in both languages", () => {
    expect(T.en.how3).toContain("Enter your promo code in the code field at checkout");
    expect(T.es.how3).toContain("Escribe tu código promocional en el campo correspondiente al pagar");
    expect(T.en.tips).not.toContain("Discounts are usually applied automatically at checkout.");
    expect(T.es.tips).not.toContain("Los descuentos normalmente se aplican automáticamente al pagar.");
  });
});
