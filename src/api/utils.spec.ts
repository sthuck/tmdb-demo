import { replacePathParams } from "./utils";
/// <reference path="vitest/globals" />

describe("replacePathParams", () => {
  it("should replace path params", () => {
    const path = "/movie/:id";
    const params = { id: "123" };

    const result = replacePathParams(path, params);

    expect(result.path).toBe("/movie/123");
    expect(result.params).toEqual({});
  });

  it("should throw an error if param is missing", () => {
    const path = "/movie/:id";
    const params = {};

    expect(() => replacePathParams(path, params)).toThrowError();
  });
});
