import { Maybe } from "./types/Maybe.ts";
import makeIterable from "./utils/makeIterable.ts";
import iteratorFrom from "./utils/iteratorFrom.ts";

function reduce<T>(
  iterable: Iterable<T>,
  reducer: (previous: T, next: T) => T,
): Maybe<T>;
function reduce<T, O>(
  iterable: Iterable<T>,
  reducer: (previous: O, next: T) => O,
  start: O,
): O;
function reduce<T, O>(
  iterable: Iterable<T>,
  reducer: (previous: O, next: T) => O,
  start?: O,
): Maybe<O> {
  if (arguments.length > 2) {
    // @ts-ignore (start: O)
    return reduce_a(iterable, reducer, start);
  } else {
    // @ts-ignore (O = T)
    return reduce_b(iterable, reducer);
  }
}

export default reduce;

export function reduce_a<T, O>(
  iterable: Iterable<T>,
  reducer: (previous: O, next: T) => O,
  start: O,
): O {
  let current = start;
  for (const item of iterable) {
    current = reducer(current, item);
  }
  return current;
}

export function reduce_b<T>(
  iterable: Iterable<T>,
  reducer: (previous: T, next: T) => T,
): Maybe<T> {
  const iterator = iteratorFrom(iterable);
  const start = iterator.next().value;
  return reduce(makeIterable(iterator), reducer, start);
}
