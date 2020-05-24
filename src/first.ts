import iteratorFrom from "./utils/iteratorFrom.ts";
import { Maybe } from "./types/Maybe.ts";

export default function first<T>(iterable: Iterable<T>): Maybe<T> {
  return iteratorFrom(iterable).next().value;
}
