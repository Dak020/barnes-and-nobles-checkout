import { describe, it, expect } from "vitest";
import { REDIRECT_URL } from "../pages/Index";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("uses the requested Spirit Halloween offer link", () => {
    expect(REDIRECT_URL).toBe(
      "https://linkthem.net/?offer_id=5569&aff_id=28799&source=GOD"
    );
  });
});
