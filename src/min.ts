import { Maybe } from "./types/Maybe.ts";

export default function min<T>(
  iterable: Iterable<T>,
  keyFn: (value: T) => number = Number,
): Maybe<T> {
  let minKey = -Infinity;
  let min = undefined;
  for (const value of iterable) {
    const curKey = keyFn(value);
    if (curKey <= minKey) {
      min = value;
      minKey = curKey;
    }
  }
  return min;
}
