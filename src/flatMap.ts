import flatten from "./flatten.ts";
import map from "./map.ts";

export default function* flatmap<T, U>(
  iterable: Iterable<T>,
  mapper: (value: T) => Iterable<U>,
): Iterable<U> {
  return flatten(map(iterable, mapper));
}
