import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from "chai";
import myAdd from "../src/index";

@suite class IndexTest {
  @test myAddTest() {
    const x = 3;
    const y = 4;
    const result = myAdd(x, y);
    expect(result).to.equal(7);
  }
}