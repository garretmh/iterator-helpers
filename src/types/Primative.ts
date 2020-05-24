export type Primitive = string | number | boolean;

export function primitiveIdentity<T>(x: T): Primitive {
  if (
    typeof x !== "string" && typeof x !== "number" && typeof x !== "boolean"
  ) {
    throw new Error(
      "Please provide a key function that can establish object identity",
    );
  }
  return x;
}
