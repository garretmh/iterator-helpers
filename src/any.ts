import { Predicate, predicateIdentity } from "./types/Predicate.ts";

export default function any<T, S extends T = T>(
  iterable: Iterable<T>,
  predicate: Predicate<T, S> = predicateIdentity,
): boolean {
  for (const item of iterable) {
    if (predicate(item)) {
      return true;
    }
  }
  return false;
}
