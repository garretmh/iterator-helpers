import { Predicate } from "./types/Predicate.ts";

export default function* except<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): Iterable<T> {
  for (const item of iterable) {
    if (!predicate(item)) {
      yield item;
    }
  }
}
