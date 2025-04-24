import { describe, expect, test } from "bun:test";
import { world } from "../src/lib.ts";

describe("World Tests", () => {
  test("Simple Test", async () => {
    await world();
    expect(true);
  });
});
