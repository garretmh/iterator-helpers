import { Predicate, predicateIdentity } from "./types/Predicate.ts";

export default function* filter<T, U extends T = T>(
  iterable: Iterable<T>,
  predicate: Predicate<T, U> = predicateIdentity,
): Iterable<U> {
  for (const item of iterable) {
    if (predicate(item)) {
      yield item;
    }
  }
}
