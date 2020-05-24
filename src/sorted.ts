import { Primitive, primitiveIdentity } from "./types/Primative.ts";
import { keyToCompare } from "./utils/keyToCompare.ts";

export default function sorted<T>(
  iterable: Iterable<T>,
  keyFn: (value: T) => Primitive = primitiveIdentity,
  reverse: boolean = false,
): Iterable<T> {
  const result = Array.from(iterable);
  result.sort(keyToCompare(keyFn));
  if (reverse) {
    result.reverse();
  }
  return result;
}
