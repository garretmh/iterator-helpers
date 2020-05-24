export default function* flatten<T>(
  iterables: Iterable<Iterable<T>>,
): Iterable<T> {
  for (const iterable of iterables) {
    for (const item of iterable) {
      yield item;
    }
  }
}
