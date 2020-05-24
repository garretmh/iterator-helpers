import { Maybe } from "./types/Maybe.ts";

export default function max<T>(
  iterable: Iterable<T>,
  keyFn: (value: T) => number = Number,
): Maybe<T> {
  let maxKey = -Infinity;
  let max = undefined;
  for (const value of iterable) {
    const curKey = keyFn(value);
    if (curKey >= maxKey) {
      max = value;
      maxKey = curKey;
    }
  }
  return max;
}
