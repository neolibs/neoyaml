import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { Schema, defineScalarTag } from "neoyaml";

describe("schema (coverage)", () => {
  it("rejects an implicit scalar tag that matches by tag prefix", () => {
    const badTag = defineScalarTag("!bad", {
      implicit: true,
      matchByTagPrefix: true,
      resolve: () => "x",
    });

    assert.throws(
      () => new Schema([badTag]),
      /Implicit scalar tags cannot match by tag prefix/,
    );
  });

  it("rejects a schema without the default scalar tag (!!str)", () => {
    assert.throws(
      () => new Schema([]),
      /schema does not define the default scalar tag/,
    );
  });
});
