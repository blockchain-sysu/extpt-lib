import "mocha";
import { assert } from "chai";

import myAdd from "../src/index";

describe("myAdd", () => {
  it("should return 7 for 3 and 4", (done: Mocha.Done) => {
    assert.equal(myAdd(3, 4), 7);
  });
});