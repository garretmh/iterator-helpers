import { Maybe } from "./types/Maybe.ts";

export default function nth<T>(iterable: Iterable<T>, index: number): Maybe<T> {
  if (index >= 0) {
    let i = 0;
    for (const item of iterable) {
      if (index === i++) {
        return item;
      }
    }
  } else {
    const array = Array.from(iterable);
    return array[array.length + index];
  }
}
