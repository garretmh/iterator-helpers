export default function* append<T>(
  iterable: Iterable<T>,
  ...appends: T[]
): Iterable<T> {
  for (const item of iterable) {
    yield item;
  }
  for (const item of appends) {
    yield item;
  }
}
