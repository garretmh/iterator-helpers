export default function* map<T, U>(
  iterable: Iterable<T>,
  mapper: (value: T) => U,
): Iterable<U> {
  for (const item of iterable) {
    yield mapper(item);
  }
}
