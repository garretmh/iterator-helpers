export default function* slice<T>(
  iterable: Iterable<T>,
  start: number = 0,
  stop: number = Infinity,
  step: number = 1,
): Iterable<T> {
  let i = 0;
  for (const item of iterable) {
    if (i >= stop) {
      return;
    }
    if (i > start && (i % step) === 0) {
      yield item;
    }
    i++;
  }
}
