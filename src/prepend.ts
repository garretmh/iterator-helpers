export default function* prepend<T>(
  iterable: Iterable<T>,
  ...prepends: T[]
): Iterable<T> {
  for (const item of prepends) {
    yield item;
  }
  for (const item of iterable) {
    yield item;
  }
}
