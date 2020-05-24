import { Predicate, predicateIdentity } from "./types/Predicate.ts";

export default function* skipWhile<T, S extends T = T>(
  iterable: Iterable<T>,
  predicate: Predicate<T, S> = predicateIdentity,
): Iterable<T> {
  let skip = true;
  for (const item of iterable) {
    if (!skip) {
      yield item;
    } else if (!predicate(item)) {
      yield item;
      skip = false;
    }
  }
}
