import { Maybe } from "./types/Maybe.ts";

export default function last<T>(iterable: Iterable<T>): Maybe<T> {
  let last;
  for (last of iterable) {}
  return last;
}
