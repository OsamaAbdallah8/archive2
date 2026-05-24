import { expect } from "chai";
import { shuffle } from "../src/Shuffle.js";

describe("Shuffle Function", () => {
  it("should return an array of the same length", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);
    expect(shuffled).to.have.lengthOf(original.length);
  });

  it("should preserve all original elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);
    expect(shuffled).to.have.members(original);
  });

  it("should shuffle array indexes (order changes with high probability)", () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let differentOrderFound = false;

    // Run shuffle multiple times to confirm order changes at least once
    for (let i = 0; i < 10; i++) {
      const shuffled = shuffle([...original]);
      if (shuffled.join(",") !== original.join(",")) {
        differentOrderFound = true;
        break;
      }
    }

    expect(differentOrderFound).to.be.true;
  });
});