import iteratorFrom from "./utils/iteratorFrom.ts";

function zip<T, U>(iterA: Iterable<T>, iterB: Iterable<U>): Iterable<[T, U]>;
function zip<T>(...iterables: Iterable<T>[]): Iterable<T[]>;
function* zip<T>(...iterables: Iterable<T>[]): Iterable<T[]> {
  return iterables.length === 2
    ? zip2(iterables[0], iterables[1])
    : zipMany(...iterables);
}
export default zip;

export function* zip2<TA, TB>(
  iterableA: Iterable<TA>,
  iterableB: Iterable<TB>,
): Iterable<[TA, TB]> {
  const iteratorA = iteratorFrom(iterableA);
  const iteratorB = iteratorFrom(iterableB);
  for (;;) {
    const a = iteratorA.next();
    const b = iteratorB.next();
    if (a.done || b.done) {
      return;
    }
    yield [a.value, b.value];
  }
}

export function* zipMany<T>(...iterables: Iterable<T>[]): Iterable<T[]> {
  const iterators = iterables.map(iteratorFrom);
  for (;;) {
    let values: T[] = [];
    for (const iterator of iterators) {
      const result = iterator.next();
      if (result.done) {
        return;
      }
      values.push(result.value);
    }
    yield values;
  }
}
