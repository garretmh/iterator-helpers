import { Maybe } from "./types/Maybe.ts";
import { Predicate, predicateIdentity } from "./types/Predicate.ts";

export default function find<T, S extends T = T>(
  iterable: Iterable<T>,
  predicate: Predicate<T, S> = predicateIdentity,
): Maybe<T> {
  for (const item of iterable) {
    if (predicate(item)) {
      return item;
    }
  }
}
