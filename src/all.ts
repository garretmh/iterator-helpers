import { Predicate, predicateIdentity } from "./types/Predicate.ts";

export default function all<T, S extends T = T>(
  iterable: Iterable<T>,
  predicate: Predicate<T, S> = predicateIdentity,
): boolean {
  for (const item of iterable) {
    if (!predicate(item)) {
      return false;
    }
  }
  return true;
}
