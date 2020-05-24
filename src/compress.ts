import iteratorFrom from "./utils/iteratorFrom.ts";

export default function* compress<T>(
  iterable: Iterable<T>,
  selectors: Iterable<boolean>,
): Iterable<T> {
  const iterator = iteratorFrom(iterable);
  const selector = iteratorFrom(selectors);
  for (;;) {
    const iteratorResult = iterator.next();
    const selectorResult = selector.next();
    if (iteratorResult.done || selectorResult.done) {
      return;
    }
    if (selectorResult.value) {
      yield iteratorResult.value;
    }
  }
}
